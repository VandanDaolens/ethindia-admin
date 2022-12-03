import { XMarkIcon } from '@heroicons/react/24/solid'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { useWeb3AuthContext } from '../../contexts/social-login-context'
import { QuestResponseType, QuestType } from '../../lib/types'
import { getScorePercent } from '../../lib/utils'
import { customStyles } from '../add-quest-modal'
import ConnectWallet from './connect-wallet'
import Fail from './fail'
import Quiz from './quiz'
import Success from './success'

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
  const [scorePercent, setScorePercent] = useState(0)

  useEffect(() => {
    if (!address) return
    setResponse((prev) => ({ ...prev, userAddress: address }))
  }, [address])

  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <div className="relative w-[600px] h-[463px]">
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
          <Quiz
            response={response}
            setResponse={setResponse}
            handleNextStep={() => {
              const score = getScorePercent(response)
              setScorePercent(score)
              if (score >= 70) setActiveStep(STEPS.success)
              else setActiveStep(STEPS.fail)
            }}
          />
        )}
        {activeStep === STEPS.fail && <Success score={scorePercent} />}
        {activeStep === STEPS.success && (
          <Fail
            score={scorePercent}
            onTryAgain={() => setActiveStep(STEPS.quiz)}
          />
        )}
      </div>
    </ReactModal>
  )
}

export default QuestModal
