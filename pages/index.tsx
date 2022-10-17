import Head from 'next/head'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import AstronomicalObject from '../components/AstronomicalObject'

export default function Page() {
  return (
    <>
      <Head>
        <title>Blueprint</title>
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
