import Head from 'next/head'
import Image from 'next/image'
const ConnectWalletBtn = dynamic(
  () => import('../components/connect-wallet-btn'),
  { ssr: false }
)
const Layout = dynamic(() => import('../components/layout'), { ssr: false })
import { DUMMY_CARD_DATA, DUMMY_QUEST_DATA } from '../lib/constants'
import dynamic from 'next/dynamic'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import QuestDropdown from '../components/quest-dropdown'
import { DUMMY_RESPONSE } from '../lib/data'
const QuestCard = dynamic(() => import('../components/quest-card'), {
  ssr: false,
})

export default function Insights() {
  const questsRes = DUMMY_RESPONSE
  const [activeQuestId, setActiveQuestId] = useState(questsRes[0]?.quest?.id)
  return (
    <Layout>
      <div className="flex flex-col bg-gray-50 h-full p-8 gap-5">
        <div className="flex justify-between items-center gap-5">
          <input
            className="rounded-2xl flex-grow border px-8 py-4"
            placeholder="Search your quests"
          />
          <ConnectWalletBtn />
        </div>
        <div className="flex justify-between">
          <h2 className="text-2xl">Numbers that matter 📈</h2>
          <QuestDropdown
            activeQuestId={activeQuestId}
            setActiveQuestId={setActiveQuestId}
            response={questsRes}
          />
        </div>
      </div>
    </Layout>
  )
}
