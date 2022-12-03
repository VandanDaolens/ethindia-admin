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
    <div className="flex flex-col">
      <p className="bg-yellow-50 text-yellow-500">
        🎖 Win a POAP by scoring more than 70%
      </p>
      <p>
        {activeQuestion + 1} of {response?.quest?.questions.length}
      </p>
      <h2>{question?.question}</h2>
      <div>
        <Options
          options={question.options || []}
          setOptions={(options) =>
            updateOptionsByQuestionId(question.id, options)
          }
          type={question.type}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Quiz
