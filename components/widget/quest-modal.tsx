import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { useWeb3AuthContext } from '../../contexts/social-login-context'
import { QuestResponseType, QuestType } from '../../lib/types'
import { customStyles } from '../add-quest-modal'
import ConnectWallet from './connect-wallet'
import Quiz from './quiz'

type Props = {
  quest: QuestType
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const STEPS = {
  connectWallet: 0,
  quiz: 1,
  success: 2,
  fail: 3,
}

const QuestModal = ({ quest, isOpen, setIsOpen }: Props) => {
  const [activeStep, setActiveStep] = useState(STEPS.connectWallet)
  const { address } = useWeb3AuthContext()
  const [response, setResponse] = useState<QuestResponseType>({
    quest,
    responses: [],
    userAddress: address,
  })

  useEffect(() => {
    if (!address) return
    setResponse((prev) => ({ ...prev, userAddress: address }))
  }, [address])

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <div className="relative">
        <button
          className="absolute top-0 right-0"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon width={24} />
        </button>
        {/* TODO: handle skip to succuess or fail step */}
        {activeStep === STEPS.connectWallet && (
          <ConnectWallet handleNextStep={() => setActiveStep(STEPS.quiz)} />
        )}
        {activeStep === STEPS.quiz && (
          <Quiz response={response} setResponse={setResponse} />
        )}
      </div>
    </ReactModal>
  )
}

export default QuestModal
