import Head from 'next/head'
import Image from 'next/image'
const ConnectWalletBtn = dynamic(
  () => import('../components/connect-wallet-btn'),
  { ssr: false }
)
const Layout = dynamic(() => import('../components/layout'), { ssr: false })
import { DUMMY_CARD_DATA } from '../lib/constants'
import { DocumentDuplicateIcon } from '@heroicons/react/24/solid'
import dynamic from 'next/dynamic'

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h1>Your Quests</h1>
          <ConnectWalletBtn />
        </div>
        <div className="flex flex-wrap">
          {DUMMY_CARD_DATA.map((card) => (
            <div key={card.id} className="flex flex-col">
              <div className="flex"></div>
              <h2>{card.title}</h2>
              {card.subTitle && <p>{card.subTitle}</p>}
              <button className="flex">
                <DocumentDuplicateIcon color="#64748B" className="w-3" />
                <span>Copy Code</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
