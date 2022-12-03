import { Menu } from '@headlessui/react'
import React from 'react'

type Props = {
  questionType: 'mcq' | 'single-choice'
  setQuestionType: (questionType: 'mcq' | 'single-choice') => void
}

const QuestionDropdown = ({ questionType, setQuestionType }: Props) => {
  return (
    <Menu>
      <Menu.Button>
        {questionType === 'mcq' ? 'Multiple choice' : 'Single choice'}
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${active && 'bg-blue-500'}`}
              onClick={() => setQuestionType('mcq')}
            >
              Multiple choice
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${active && 'bg-blue-500'}`}
              onClick={() => setQuestionType('single-choice')}
            >
              Single choice
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default QuestionDropdown
