import { nanoid } from 'nanoid'
import { QuestionType, QuestType } from './types'

export const ROUTES = {
  root: '/',
  insights: '/insights',
}

export const DUMMY_CARD_DATA: QuestType[] = [
  {
    id: '6',
    title: 'ETHIndia 2022 - POAP ',
    subTitle:
      'Quest to onboard users to Uniswap easily and verify their knowledge on the space.',
    questions: [
      {
        id: '1',
        options: [{ id: '1', text: 'test' }],
        question: 'What is this?',
        type: 'mcq',
      },
    ],
    imageName: '',
  },
  {
    id: '3',
    title: 'ETHIndia 2022 - POAP ',
    subTitle:
      'Quest to onboard users to Uniswap easily and verify their knowledge on the space.',
    questions: [
      {
        id: '1',
        options: [{ id: '1', text: 'test' }],
        question: 'What is this?',
        type: 'mcq',
      },
    ],
    imageName: '',
  },
  {
    id: '2',
    title: 'ETHIndia 2022 - POAP ',
    subTitle:
      'Quest to onboard users to Uniswap easily and verify their knowledge on the space.',
    questions: [
      {
        id: '1',
        options: [{ id: '1', text: 'test' }],
        question: 'What is this?',
        type: 'mcq',
      },
    ],
    imageName: '',
  },
  {
    id: '1',
    title: 'ETHIndia 2022 - POAP ',
    subTitle:
      'Quest to onboard users to Uniswap easily and verify their knowledge on the space.',
    questions: [
      {
        id: '1',
        options: [{ id: '1', text: 'test' }],
        question: 'What is this?',
        type: 'mcq',
      },
    ],
    imageName: '',
  },
]

export const DEFAULT_QUESTION_DATA: QuestionType = {
  id: '1',
  question: '',
  type: 'single-choice',
}
