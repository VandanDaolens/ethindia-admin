export type QuestType = {
  id: string
  title: string
  subTitle?: string
  questions: QuestionType[]
  // TODO: upload paop type?
  startDate: string
  endDate: string
}

export type QuestionType = {
  id: string
  question: string
  type: 'mcq' | 'single-choice'
  options: MCQOptionType[]
}

export type MCQOptionType = {
  text: string
  id: string
}
