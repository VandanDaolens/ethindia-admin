import React from 'react'
import { useWeb3AuthContext } from '../contexts/social-login-context'

const ConnectWalletBtn = () => {
  const { address, loading, connect, disconnect } = useWeb3AuthContext()
  return (
    <button onClick={!address ? connect : disconnect}>
      {!address ? 'Connect wallet' : 'Disconnect wallet'}{' '}
    </button>
  )
}

export default ConnectWalletBtn
