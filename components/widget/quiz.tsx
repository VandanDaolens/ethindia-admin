import React, { Dispatch, SetStateAction, useState } from 'react'
import { MCQOptionType, QuestResponseType, QuestType } from '../../lib/types'
import { Options } from './options'

type Props = {
  response: QuestResponseType
  setResponse: Dispatch<SetStateAction<QuestResponseType>>
  handleNextStep: () => void
}

const Quiz = ({ response, setResponse, handleNextStep }: Props) => {
  const [activeQuestion, setActiveQuestion] = useState(0)

  const question = response?.quest?.questions?.[activeQuestion]

  const updateOptionsByQuestionId = (questionId: string, options: string[]) => {
    const responses = [...response?.responses]
    if (!responses) return
    const index = responses.findIndex((res) => res.questionId === questionId)
    responses[index].options = options
    setResponse((prev) => ({ ...prev, responses }))
  }

  const handleNext = () => {
    if (activeQuestion < response?.quest?.questions?.length - 1)
      setActiveQuestion(activeQuestion + 1)
    else handleNextStep()
  }

  return (
    <div className="flex flex-col w-full h-full gap-2">
      <p className="bg-yellow-50 text-yellow-500 rounded-lg p-2 w-fit">
        🎖 Win a POAP by scoring more than 70%
      </p>
      <p className='text-xs text-gray-500'>
        {activeQuestion + 1} of {response?.quest?.questions.length}
      </p>
      <h2 className='text-xl font-bold'>{question?.question}</h2>
      <div className="flex-grow overflow-auto">
        <Options
          options={question.options || []}
          setOptions={(options) =>
            updateOptionsByQuestionId(question.id, options)
          }
          type={question.type}
        />
      </div>
      <button
        onClick={handleNext}
        className="bg-purple-600 hover:opacity-70 text-white rounded-md py-3 font-bold"
      >
        Next
      </button>
    </div>
  )
}

export default Quiz
