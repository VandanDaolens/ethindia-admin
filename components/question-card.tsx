import React from 'react'
import { QuestionType } from '../lib/types'
import MCQBlock from './mcq-block'
import QuestionDropdown from './question-dropdown'

type Props = {
  question: QuestionType
  setQuestion: (obj: QuestionType) => void
  index: number
}

const QuestionCard = ({ question, setQuestion, index }: Props) => {
  const modifyQuestion = (obj: Partial<QuestionType>) =>
    setQuestion({ ...question, ...obj })
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div>
          <p>{index + 1}. </p>
          <input
            placeholder="Type question"
            value={question.question}
            onChange={(e) =>
              modifyQuestion({ question: e.currentTarget.value })
            }
          />
        </div>
        <QuestionDropdown
          questionType={question.type}
          setQuestionType={(type) => modifyQuestion({ type })}
        />
      </div>
      <MCQBlock
        options={question.options}
        setOptions={(options) => modifyQuestion({ options })}
        type={question.type}
      />
    </div>
  )
}

export default QuestionCard
