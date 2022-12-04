import { CalendarIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { nanoid } from 'nanoid'
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import Modal from 'react-modal'
import { useSmartAccountContext } from '../contexts/smart-account-context'
import { useWeb3AuthContext } from '../contexts/social-login-context'
import { DEFAULT_QUESTION_DATA } from '../lib/constants'
import { QuestionType, QuestType } from '../lib/types'
import {
  getDefaultQuestionData,
  saveToQuestSmartContract,
  uploadNftMetadataToIpfs,
  uploadToIpfs,
} from '../lib/utils'
import QuestionCard from './question-card'

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  addQuest: any
}

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '24px',
  },
  overlay: {
    background: '#00000066',
  },
}

const AddQuestModal = ({ isOpen, setIsOpen, addQuest }: Props) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [isSaving, setIsSaving] = useState(false)

  const { wallet } = useSmartAccountContext()

  const updateQuestionById = (questionId: string, question: QuestionType) => {
    const updatedQuestions = [...questions]
    const index = updatedQuestions.findIndex(({ id }) => id === questionId)
    if (index === -1) return
    updatedQuestions[index] = { ...updatedQuestions[index], ...question }
    setQuestions(updatedQuestions)
  }

  const deleteQuestionById = (questionId: string) => {
    const updatedQuestions = [...questions].filter(
      (question) => question.id !== questionId
    )
    setQuestions(updatedQuestions)
  }

  const addNewQuestion = () => {
    const newQuestion = getDefaultQuestionData()
    const newQuestions = [...questions, newQuestion]
    setQuestions(newQuestions)
  }

  const onDone = async () => {
    if (isSaving) return
    setIsSaving(true)
    const quest: QuestType = {
      id: nanoid(),
      questions,
      title,
      subTitle,
      imageUrl: imageInputRef?.current?.files?.[0]?.name || '',
    }
    const imageFile = imageInputRef?.current?.files?.[0]
    const imageUrlData = await uploadNftMetadataToIpfs(imageFile)
    console.log({ imageUrlData })
    quest.imageUrl = imageUrlData

    const data = await uploadToIpfs(quest)
    await saveToQuestSmartContract(
      data?.data?.path,
      imageUrlData,
      quest.id,
      wallet as any,
      () => {
        addQuest(quest)
        setIsSaving(false)
        setIsOpen(false)
      },
      () => {
        alert('Something went wrongs')
        setIsSaving(false)
      }
    )
  }

  const imageInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (questions.length === 0) setQuestions([getDefaultQuestionData()])
  }, [questions])

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className="flex flex-col relative w-[600px] gap-2 ">
        <button
          className="top-0 right-0 absolute"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon width={24} />
        </button>
        <input
          placeholder="Add title of you quest"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          className="text-xl w-[80%] outline-none"
        />
        <input
          placeholder="Add description (optional)"
          value={subTitle}
          onChange={(e) => setSubTitle(e.currentTarget.value)}
          className="text-xs w-[80%] outline-none"
        />
        <div className="flex items-center gap-2">
          <label className="flex items-center space-x-2 border rounded-3xl px-3 py-1 my-2 text-gray-500 text-sm bg-gray-100 cursor-pointer self-start">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              ref={imageInputRef}
              onChange={(e) => {
                if (!e?.target?.files?.[0]) return
                const url = URL.createObjectURL(e.target.files[0])
                setImage(url)
              }}
            />
            <PhotoIcon className="w-4 text-gray-500" />
            <span>{image ? 'Update' : 'Upload POAP'} image</span>
          </label>
          {image && (
            <p className="text-xs text-gray-500">
              {imageInputRef.current?.files?.[0]?.name}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4 overflow-auto max-h-[60vh]">
          {questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              setQuestion={(question) =>
                updateQuestionById(question.id, question)
              }
              index={index}
              deleteQuestion={() => deleteQuestionById(question.id)}
            />
          ))}
        </div>
        <button
          onClick={addNewQuestion}
          className="text-sm border rounded-full self-center py-2 px-3 hover:border-purple-600 text-gray-500"
        >
          + Add question
        </button>
        <div className="mt-auto flex justify-between self-end">
          <button
            onClick={onDone}
            disabled={isSaving}
            className="bg-purple-600 hover:opacity-70 text-white px-4 py-2 rounded-xl"
          >
            {isSaving ? 'Saving...' : 'Done'}
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default AddQuestModal
