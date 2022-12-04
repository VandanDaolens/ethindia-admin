import { QuestResponseType } from './types'

export const DUMMY_RESPONSE: QuestResponseType[] = [
  {
    quest: {
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
              isCorrect: true,
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
              isCorrect: true,
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
              isCorrect: true,
            },
            {
              text: 'Talk 2',
              id: 'vbYOwkQIbfr3CY-wWr1iX',
              isCorrect: true,
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
      imageUrl: '6z72ja.jpg',
    },
    responses: [
      {
        questionId: '6D65uKtadoLaCzYWkM3gq',
        options: ['dDgOIdA3fbRYLSQhTCO-e'],
      },
      {
        questionId: 'nwt3b0r7Sp0yiStCQjCDn',
        options: ['oxNNg2kV4a9yih-pp7xZ7'],
      },
      {
        questionId: 'jomPTM0RKvP5aeY2AZ32W',
        options: ['oxNNg2kV4a9yih-pp7xZ7', 'vbYOwkQIbfr3CY-wWr1iX'],
      },
    ],
    userAddress: '0xcB56fC02BB89F218b9923d26B14583cB21DB0747',
  },
]
