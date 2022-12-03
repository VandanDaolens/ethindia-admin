import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { MCQOptionType } from '../../lib/types'

type Props = {
  options: MCQOptionType[]
  setOptions: (opts: string[]) => void
  type: 'mcq' | 'single-choice'
}

export const Options = ({ options, setOptions, type }: Props) => {
  const [selected, setSelected] = useState<string[]>([])

  return (
    <div className="flex flex-col">
      {options.map((option) => (
        <button
          key={option.id}
          className="flex"
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
          />
          {option.text}
        </button>
      ))}
    </div>
  )
}
