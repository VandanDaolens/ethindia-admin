import { PlusIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { useSmartAccountContext } from '../contexts/smart-account-context'
import { useWeb3AuthContext } from '../contexts/social-login-context'
import { QuestType } from '../lib/types'
import { getQuests } from '../lib/utils'
import QuestCard from './quest-card'

type Props = {
  setIsAddQuestModalOpen: any
  quests: QuestType[]
  setQuests: any
}
const Quests = ({ quests, setIsAddQuestModalOpen, setQuests }: Props) => {
  const { wallet } = useSmartAccountContext()
  const { address } = useWeb3AuthContext()
  useEffect(() => {
    if (!address || !wallet) return
    const fn = async () => {
      const questsFromSC = await getQuests(wallet as any)
      setQuests?.(questsFromSC)
    }
    fn()
  }, [address, wallet])
  return (
    <div className="flex flex-wrap gap-5">
      <button
        className="flex flex-col w-60 h-48 justify-center items-center border border-purple-600 bg-purple-100 text-purple-600 rounded-2xl"
        onClick={() => setIsAddQuestModalOpen(true)}
      >
        <PlusIcon className="w-6" />
        <span>Add Quest</span>
      </button>
      {quests.map((card) => (
        <QuestCard card={card} key={card.id} />
      ))}
    </div>
  )
}

export default Quests
