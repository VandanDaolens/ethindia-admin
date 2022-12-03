import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { QuestionType } from '../lib/types'
import MCQBlock from './mcq-block'
import QuestionDropdown from './question-dropdown'

type Props = {
  question: QuestionType
  setQuestion: (obj: QuestionType) => void
  index: number
  deleteQuestion: () => void
}

const QuestionCard = ({
  question,
  setQuestion,
  index,
  deleteQuestion,
}: Props) => {
  const modifyQuestion = (obj: Partial<QuestionType>) => {
    setQuestion({ ...question, ...obj })
  }
  return (
    <div className="flex flex-col border p-3 rounded-xl gap-3">
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <p className="text-gray-500">{index + 1}. </p>
          <input
            placeholder="Type question"
            value={question.question}
            onChange={(e) =>
              modifyQuestion({ question: e.currentTarget.value })
            }
            className="outline-none"
          />
        </div>
        <div className="flex justify-center gap-2">
          <QuestionDropdown
            questionType={question.type}
            setQuestionType={(type) => modifyQuestion({ type })}
          />
          {index > 0 && (
            <button onClick={() => deleteQuestion()}>
              <XMarkIcon className="w-5" />
            </button>
          )}
        </div>
      </div>
      <MCQBlock
        key={question.id}
        options={question.options || []}
        setOptions={(options) => {
          console.log({ options })
          modifyQuestion({ options })
        }}
        type={question.type}
      />
    </div>
  )
}

export default QuestionCard
