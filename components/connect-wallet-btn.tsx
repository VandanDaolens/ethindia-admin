import React from 'react'
import { useWeb3AuthContext } from '../contexts/social-login-context'

const ConnectWalletBtn = () => {
  const { address, loading, connect, disconnect } = useWeb3AuthContext()
  return (
    <button onClick={!address ? connect : disconnect} className="px-3 py-3 bg-purple-600 hover:opacity-70 text-white rounded-xl">
      {!address ? 'Connect wallet' : 'Disconnect wallet'}{' '}
    </button>
  )
}

export default ConnectWalletBtn
