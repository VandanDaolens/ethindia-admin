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
    <div className="flex flex-col w-full h-full">
      <p className="flex-grow flex justify-center items-center text-yellow-500 text-lg font-bold">🎖 Win a POAP taking up an easy quiz</p>
      <button
        className="bg-purple-600 hover:opacity-70 text-white rounded-md py-3 font-bold"
        onClick={connect}
        disabled={!!address}
      >
        {loading ? 'Connecting...' : 'Connect wallet'}
      </button>
    </div>
  )
}

export default ConnectWallet
