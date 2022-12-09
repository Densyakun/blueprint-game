import Head from 'next/head'
import React from 'react'
import dynamic from 'next/dynamic'
import AstronomicalObject from '../components/canvas/AstronomicalObject'
import Dom from '../components/layout/dom'
import BasicSpeedDial from '../components/dom/BasicSpeedDial'
//import Player from '../components/canvas/Player'

const LCanvas = dynamic(() => import('../components/layout/canvas'), {
  ssr: false,
})

export default function Page() {
  return (
    <>
      <Head>
        <title>Blueprint</title>
      </Head>

      <Dom>
        <BasicSpeedDial />
      </Dom>

      <LCanvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <AstronomicalObject />
        {/*<Player />*/}
      </LCanvas>
    </>
  )
}
