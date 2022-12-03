import Image from 'next/image'
import React from 'react'

type Props = {
  score: number
  onTryAgain: () => void
}

const Fail = ({ score, onTryAgain }: Props) => {
  return (
    <div className="flex flex-col items-center gap-3 h-full">
      <h2 className="text-xl w-1/2 text-center font-bold">
        Sorry! You just scored {score}% Try again to win a POAP
      </h2>
      <Image src="/images/fail.png" width={140} height={196} alt="sad emoji" className='my-auto' />
      <button
        className="bg-purple-500 hover:opacity-70 mt-auto w-full py-2 rounded-lg text-white cursor-pointer"
        onClick={onTryAgain}
      >
        Try again
      </button>
    </div>
  )
}

export default Fail
