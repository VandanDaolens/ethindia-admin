import React, { useEffect, useState } from 'react'
import { useWeb3AuthContext } from '../../contexts/social-login-context'
import { QuestResponseType, QuestType } from '../../lib/types'
import dynamic from 'next/dynamic'
const QuestModal = dynamic(() => import('./quest-modal'), { ssr: false })

type Props = {
  quest: QuestType
}

const Widget = ({ quest }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="w-full">
      <h1>🎖 Win a POAP taking up an easy quiz 🎖 </h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-3 py-3 bg-purple-600 hover:opacity-70 text-white rounded-xl"
      >
        Take quiz
      </button>
      <QuestModal
        quest={quest}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      />
    </div>
  )
}

export default Widget
