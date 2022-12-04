const ConnectWalletBtn = dynamic(
  () => import('../components/connect-wallet-btn'),
  { ssr: false }
)
const Layout = dynamic(() => import('../components/layout'), { ssr: false })
import dynamic from 'next/dynamic'
const AddQuestModal = dynamic(() => import('../components/add-quest-modal'), {
  ssr: false,
})
import { QuestType } from '../lib/types'
import { useState } from 'react'
const Quests = dynamic(() => import('../components/quests'), {
  ssr: false,
})

export default function Home() {
  const [isAddQuestModalOpen, setIsAddQuestModalOpen] = useState(false)
  const [quests, setQuests] = useState<QuestType[]>([])

  const addQuest = (newQuest: QuestType) =>
    setQuests((prev) => [...prev, newQuest])

  return (
    <Layout>
      <div className="flex flex-col bg-gray-50 h-full p-8 gap-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Your Quests</h1>
          <ConnectWalletBtn />
        </div>
        <Quests
          quests={quests}
          setQuests={setQuests}
          setIsAddQuestModalOpen={setIsAddQuestModalOpen}
        />
      </div>
      <AddQuestModal
        addQuest={addQuest}
        isOpen={isAddQuestModalOpen}
        setIsOpen={setIsAddQuestModalOpen}
      />
    </Layout>
  )
}
