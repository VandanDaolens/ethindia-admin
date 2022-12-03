import React, { useEffect } from 'react'
import { useWeb3AuthContext } from '../../contexts/social-login-context'

type Props = {
  handleNextStep: () => void
}

const ConnectWallet = ({ handleNextStep }: Props) => {
  const { address, connect, loading } = useWeb3AuthContext()
  useEffect(() => {
    if (address) handleNextStep()
  }, [address])
  return (
    <div className="flex flex-col">
      <p className="flex-grow">🎖 Win a POAP taking up an easy quiz</p>
      <button
        className="bg-purple-600 hover:opacity-70"
        onClick={connect}
        disabled={!!address}
      >
        {loading ? 'Connecting...' : 'Connect wallet'}
      </button>
    </div>
  )
}

export default ConnectWallet
