import Head from 'next/head'
import Image from 'next/image'
const ConnectWalletBtn = dynamic(
  () => import('../components/connect-wallet-btn'),
  { ssr: false }
)
const Layout = dynamic(() => import('../components/layout'), { ssr: false })
import { DUMMY_CARD_DATA } from '../lib/constants'
import dynamic from 'next/dynamic'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import AddQuestModal from '../components/add-quest-modal'
const QuestCard = dynamic(() => import('../components/quest-card'), {
  ssr: false,
})

export default function Home() {
  const [isAddQuestModalOpen, setIsAddQuestModalOpen] = useState(false)
  // TODO: figure out update quest logic
  const [selectedQuestId, setSelectedQuestId] = useState('')
  return (
    <Layout>
      <div className="flex flex-col bg-gray-50 h-full p-8 gap-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Your Quests</h1>
          <ConnectWalletBtn />
        </div>
        <div className="flex flex-wrap gap-5">
          <button
            className="flex flex-col w-60 h-48 justify-center items-center border border-purple-600 bg-purple-100 text-purple-600 rounded-2xl"
            onClick={() => setIsAddQuestModalOpen(true)}
          >
            <PlusIcon className="w-6" />
            <span>Add Quest</span>
          </button>
          {DUMMY_CARD_DATA.map((card) => (
            <QuestCard
              card={card}
              key={card.id}
              onClick={() => setSelectedQuestId(card.id)}
            />
          ))}
        </div>
      </div>
      <AddQuestModal
        isOpen={isAddQuestModalOpen}
        setIsOpen={setIsAddQuestModalOpen}
      />
    </Layout>
  )
}
