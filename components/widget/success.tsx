import React from 'react'

type Props = {
  score: number
}

const Success = ({ score }: Props) => {
  // TODO: get image
  const image = '/images/example-nft.png'
  const handleMint = async () => {
    // TODO: handle minting
    console.log('MINT')
  }
  return (
    <div className="flex flex-col p-5 items-center gap-3">
      <h2 className="text-xl w-1/2 text-center font-bold">
        Congratulations! You scored {score}% Here&apos;s your POAP 🥳
      </h2>
      <img src={image} className="h-[300px]" alt="nft" />
      <p className="text-gray-500 font-bold" onClick={handleMint}>
        <a
          href="https://chrome.google.com/webstore/detail/push-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg"
          className="text-purple-600 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Download Push
        </a>{' '}
        to get notified on exciting quests
      </p>
    </div>
  )
}

export default Success
