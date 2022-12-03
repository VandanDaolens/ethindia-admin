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

export const DUMMY_QUEST_DATA: QuestType = {
  id: 'jMJLdsBcvY5RzXXGYkn4f',
  questions: [
    {
      id: '6D65uKtadoLaCzYWkM3gq',
      question: 'How was the event?',
      type: 'single-choice',
      options: [
        {
          text: 'Bad',
          id: 'dDgOIdA3fbRYLSQhTCO-e',
        },
        {
          text: 'Ok',
          id: '1HqEmTue4z8qP-lOOCGSq',
        },
        {
          text: 'Good',
          id: 'vxFJHZ6NK6ct1dmP3EqSw',
        },
      ],
    },
    {
      id: 'nwt3b0r7Sp0yiStCQjCDn',
      question: 'Will you attend future events?',
      type: 'single-choice',
      options: [
        {
          text: 'Yes',
          id: 'xmjBoURVAKYI3zgYt0q1x',
        },
        {
          text: 'No',
          id: 'oxNNg2kV4a9yih-pp7xZ7',
        },
      ],
    },
    {
      id: 'jomPTM0RKvP5aeY2AZ32W',
      question: 'Which talks did you attend?',
      type: 'mcq',
      options: [
        {
          text: 'Talk 1',
          id: 'zMjJ1wNaN5qUFeDiXO4m_',
        },
        {
          text: 'Talk 2',
          id: 'vbYOwkQIbfr3CY-wWr1iX',
        },
        {
          text: 'Talk 3',
          id: 'gRi46Ig0NLMd3z4GKHzWo',
        },
      ],
    },
  ],
  title: 'Time to quiz',
  subTitle: 'optional description?',
  imageName: '6z72ja.jpg',
}

export const DEFAULT_QUESTION_DATA: QuestionType = {
  id: '1',
  question: '',
  type: 'single-choice',
}
