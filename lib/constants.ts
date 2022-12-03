import { QuestionType, QuestType } from './types'

export const ROUTES = {
  root: '/',
  insights: '/insights',
}

export const DUMMY_CARD_DATA: QuestType[] = [
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
    endDate: '2022-12-03T03:23:23.616Z',
    startDate: '2022-12-03T03:23:23.616Z',
  }, {
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
    endDate: '2022-12-03T03:23:23.616Z',
    startDate: '2022-12-03T03:23:23.616Z',
  }, {
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
    endDate: '2022-12-03T03:23:23.616Z',
    startDate: '2022-12-03T03:23:23.616Z',
  }, {
    id: '4',
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
    endDate: '2022-12-03T03:23:23.616Z',
    startDate: '2022-12-03T03:23:23.616Z',
  }, {
    id: '5',
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
    endDate: '2022-12-03T03:23:23.616Z',
    startDate: '2022-12-03T03:23:23.616Z',
  }, {
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
    endDate: '2022-12-03T03:23:23.616Z',
    startDate: '2022-12-03T03:23:23.616Z',
  }
]

export const DEFAULT_QUESTION_DATA: QuestionType = {
  id: '1',
  options: [
    { id: '1', text: '' },
    { id: '2', text: '' },
  ],
  question: '',
  type: 'single-choice',
}
