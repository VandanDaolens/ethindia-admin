import { nanoid } from 'nanoid'
import { DEFAULT_QUESTION_DATA } from './constants'

export const getDefaultQuestionData = () => {
  const data = DEFAULT_QUESTION_DATA
  data.id = nanoid()
  data.options = []
  return data
}
