export type QuestType = {
  id: string
  title: string
  subTitle?: string
  questions: QuestionType[]
  imageName: string
  // TODO: upload paop type?
}

export type QuestionType = {
  id: string
  question: string
  type: 'mcq' | 'single-choice'
  options?: MCQOptionType[]
}

export type MCQOptionType = {
  text: string
  id: string
  isCorrect?: boolean
}

export type QuestResponseType = {
  userAddress: string
  quest: QuestType
  responses: {
    questionId: string
    options: string[]
  }[]
}
