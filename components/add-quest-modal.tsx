import { CalendarIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { nanoid } from 'nanoid'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import Modal from 'react-modal'
import { DEFAULT_QUESTION_DATA } from '../lib/constants'
import { QuestionType, QuestType } from '../lib/types'
import QuestionCard from './question-card'

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const AddQuestModal = ({ isOpen, setIsOpen }: Props) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [questions, setQuestions] = useState<QuestionType[]>([
    DEFAULT_QUESTION_DATA,
  ])

  const updateQuestionById = (question: QuestionType) => {
    const index = questions.findIndex(({ id }) => id === question.id)
    if (index === -1) return
    const updatedQuestions = [...questions]
    updatedQuestions[index] = question
    setQuestions(updatedQuestions)
  }

  const onDone = async () => {
    // TODO: complete
    const quest: QuestType = {
      endDate: endDateInputRef.current?.valueAsDate?.toISOString() || '',
      startDate: startDateInputRef.current?.valueAsDate?.toISOString() || '',
      id: nanoid(),
      questions,
      title,
      subTitle,
    }

    console.log({ quest })
  }

  const imageInputRef = useRef<HTMLInputElement>(null)
  const startDateInputRef = useRef<HTMLInputElement>(null)
  const endDateInputRef = useRef<HTMLInputElement>(null)

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className="flex flex-col relative w-96">
        <button
          className="top-0 right-0 absolute"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon width={10} />
        </button>
        <input
          placeholder="Add title of you quest"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <input
          placeholder="Add description (optional)"
          value={subTitle}
          onChange={(e) => setSubTitle(e.currentTarget.value)}
        />
        <label className="flex items-center space-x-2 border rounded-3xl px-3 py-1 text-gray-800 cursor-pointer">
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
          <PhotoIcon />
          <span>{image ? 'Update' : 'Add'} image</span>
        </label>
        <div className="flex flex-col">
          {questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              question={question}
              setQuestion={updateQuestionById}
              index={index}
            />
          ))}
        </div>
        <button
          onClick={() =>
            setQuestions((prev) => [...prev, DEFAULT_QUESTION_DATA])
          }
        >
          + Add question
        </button>
        <div className="mt-auto flex justify-between">
          <div className="flex relative">
            <label onClick={() => startDateInputRef.current?.showPicker()}>
              <input
                type="date"
                className="absolute"
                style={{ visibility: 'hidden' }}
                ref={startDateInputRef}
              />
              <CalendarIcon />
              <span>Start date</span>
            </label>
            <span>Till</span>
            <label onClick={() => endDateInputRef.current?.showPicker()}>
              <input
                type="date"
                className="absolute"
                style={{ visibility: 'hidden' }}
                ref={endDateInputRef}
              />
              <CalendarIcon />
              <span>End date</span>
            </label>
          </div>
          <button onClick={onDone}>Done</button>
        </div>
      </div>
    </Modal>
  )
}

export default AddQuestModal
