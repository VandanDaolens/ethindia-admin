import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { MCQOptionType } from '../../lib/types'

type Props = {
  options: MCQOptionType[]
  setOptions: (opts: string[]) => void
  type: 'mcq' | 'single-choice'
}

export const Options = ({ options, setOptions, type }: Props) => {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    setOptions(selected)
  }, [selected])

  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <button
          key={option.id}
          className={classNames(
            'flex border rounded-lg items-center gap-2 p-3',
            { 'bg-purple-100 border-purple-600': selected.includes(option.id) }
          )}
          onClick={() =>
            setSelected((prev) =>
              type !== 'mcq'
                ? [option.id]
                : prev.find((id) => id === option.id)
                ? prev.filter((id) => id !== option.id)
                : [...prev, option.id]
            )
          }
        >
          <input
            type={type === 'mcq' ? 'checkbox' : 'radio'}
            checked={selected.includes(option.id)}
            readOnly
          />
          {option.text}
        </button>
      ))}
    </div>
  )
}
