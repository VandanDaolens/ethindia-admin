import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useWeb3AuthContext } from '../contexts/social-login-context'
import { ROUTES } from '../lib/constants'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const router = useRouter()
  const { address, userInfo, getUserInfo } = useWeb3AuthContext()

  useEffect(() => {
    if (address) getUserInfo()
  }, [address, getUserInfo])
  useEffect(() => {
    console.log(userInfo)
  }, [userInfo])
  return (
    <div className="flex w-screen h-screen">
      <div className="h-sceen w-64 flex flex-col">
        <Image
          src="/images/sidebar-bg.png"
          width={286}
          height={140}
          alt="sidebar bg"
        />
        <div className="flex flex-col p-3">
          <Link
            href={ROUTES.root}
            className={classNames('p-2 rounded-lg', {
              'bg-gray-100 font-semibold': router.pathname === ROUTES.root,
            })}
          >
            Quests
          </Link>
          <Link
            href={ROUTES.insights}
            className={classNames('p-2 rounded-lg', {
              'bg-gray-100 font-semibold': router.pathname === ROUTES.insights,
            })}
          >
            Insights
          </Link>
        </div>
        {userInfo && (
          <div className="mt-auto p-2 font-bold">
            <span className="text-purple-600 text-xl">
              {userInfo?.name || address}
            </span>{' '}
          </div>
        )}
      </div>
      <div className='w-full'>{children}</div>
    </div>
  )
}

export default Layout
