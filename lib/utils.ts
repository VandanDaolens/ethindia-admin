import { nanoid } from 'nanoid'
import { DEFAULT_QUESTION_DATA } from './constants'
import { QuestResponseType } from './types'

export const getScorePercent = (response: QuestResponseType) => {
  const totalQuestions = response.quest?.questions?.length
  const totalCorrectAnswers = response?.quest?.questions?.filter((question) => {
    const answeredOptions = response?.responses?.find(
      (res) => res.questionId === question.id
    )?.options
    let isCorrect = true
    question.options?.forEach((option) => {
      const isMarked = answeredOptions?.includes(option.id)
      if (isMarked && !option?.isCorrect) isCorrect = false
      if (!isMarked && option?.isCorrect) isCorrect = false
    })
    return isCorrect
  })?.length
  if (!totalCorrectAnswers) return 0
  return (totalCorrectAnswers * 100) / totalQuestions
}

export const getDefaultQuestionData = () => {
  const data = DEFAULT_QUESTION_DATA
  data.id = nanoid()
  data.options = []
  return data
}
