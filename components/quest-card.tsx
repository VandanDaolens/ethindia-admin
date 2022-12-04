import { DocumentDuplicateIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useWeb3AuthContext } from '../contexts/social-login-context'
import { QuestType } from '../lib/types'

type Props = {
  card: QuestType
}

const QuestCard = ({ card }: Props) => {
  const { userInfo, address } = useWeb3AuthContext()
  // TODO: handle copy
  const onCopyCode = () => {
    console.log('HANDLE COPY')
  }
  return (
    <div className="flex flex-col w-60 h-48 rounded-2xl border bg-white p-5 gap-1 hover:border-purple-600 cursor-pointer">
      <div className="flex text-purple-600 text-xs">
        {userInfo?.name || address}
      </div>
      <h2 className="font-bold">{card.title}</h2>
      {card.subTitle && (
        <p className="text-gray-400 text-xs">{card.subTitle}</p>
      )}
      <button
        className="flex w-full mt-auto bg-gray-100 text-gray-500 items-center justify-center gap-1 text-xs p-1 rounded-lg"
        onClick={onCopyCode}
      >
        <DocumentDuplicateIcon color="#64748B" className="w-3" />
        <span>Copy Code</span>
      </button>
    </div>
  )
}

export default QuestCard
