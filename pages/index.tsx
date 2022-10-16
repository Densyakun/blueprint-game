import Head from 'next/head'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import AstronomicalObject from '../components/AstronomicalObject'

export default function Page() {
  return (
    <>
      <Head>
        <title>Blueprint</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>

      <div id='canvas-container'>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <AstronomicalObject />
        </Canvas>
      </div>
    </>
  )
}
