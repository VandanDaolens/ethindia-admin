import { XMarkIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import { nanoid } from 'nanoid'
import { useEffect } from 'react'
import { MCQOptionType } from '../lib/types'

type MCQBlockProps = {
  options: MCQOptionType[]
  setOptions: (options: MCQOptionType[]) => void
  type: 'mcq' | 'single-choice'
}

const MCQBlock = ({ options, setOptions, type }: MCQBlockProps) => {
  const onAddNewOption = () =>
    setOptions([...options, { text: '', id: nanoid() }])

  const onOptionInputChange = (value: string, id: string) => {
    const newOptions = [...options]
    const index = newOptions.findIndex((option) => option.id === id)
    if (index === -1) return
    newOptions[index].text = value
    setOptions(newOptions)
  }

  const onDeleteOption = (id: string) => {
    const newOptions = [...options]
    const index = newOptions.findIndex((option) => option.id === id)
    newOptions.splice(index, 1)
    setOptions(newOptions)
  }

  const focusOption = (index: number) =>
    index &&
    document.getElementById(options[index]?.id)?.querySelector('input')?.focus()

  useEffect(() => {
    if (options.length !== 0) return
    setOptions([
      { text: '', id: nanoid() },
      { text: '', id: nanoid() },
    ])
  }, [])

  useEffect(() => {
    if (!options) return
    options?.[0]?.text === ''
      ? focusOption(0)
      : focusOption(options?.length - 1)
  }, [options?.length])

  return (
    <div className="flex flex-col items-start gap-3">
      <div className="flex flex-col gap-3 w-full">
        {options?.map((option, index) => (
          <div
            key={option.id}
            id={option.id}
            className="flex gap-2 items-center p-3 bg-white border rounded-xl"
          >
            <div
              className={classNames('p-2 border bg-white', {
                'rounded-full': type === 'mcq',
                rounded: type === 'single-choice',
              })}
            />
            <input
              className="outline-none w-full"
              value={option.text}
              onChange={(e) =>
                onOptionInputChange(e.currentTarget.value, option.id)
              }
              onKeyUp={(e) =>
                e.currentTarget.value &&
                e.key === 'Enter' &&
                (options.length - 1 === index
                  ? onAddNewOption()
                  : focusOption(index + 1))
              }
              placeholder={`Option ${index + 1}`}
            />
            {index > 1 && (
              <button
                onClick={() => onDeleteOption(option.id)}
                className="opacity-75"
              >
                <XMarkIcon className="w-5" />
              </button>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={onAddNewOption}
        className="text-purple-600 hover:underline"
      >
        + Add option
      </button>
    </div>
  )
}

export default MCQBlock
