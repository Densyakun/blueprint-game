import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import dynamic from 'next/dynamic'
import LoginForm from '../components/LoginForm'
import AstronomicalObject from '../components/canvas/AstronomicalObject'
import UI from '../components/layout/ui'
//import Player from '../components/canvas/Player'
import useUser from '../lib/useUser'

const LCanvas = dynamic(() => import('../components/layout/canvas'), {
  ssr: false,
})

const Home: NextPage = () => {
  const { user } = useUser()

  return <>
    <Head>
      <title>Blueprint</title>
    </Head>

    {user?.isLoggedIn
      ? <>
        <UI />

        <LCanvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <AstronomicalObject />
          {/*<Player />*/}
        </LCanvas>
      </>
      : <LoginForm />}
  </>
}

export default Home
