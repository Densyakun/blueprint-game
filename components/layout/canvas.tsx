import { ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const LCanvas = ({ children }: { children: ReactNode }) => {
  return (
    <Canvas
      style={{
        position: 'fixed',
        padding: 0,
        margin: 0,
        top: 0,
        left: 0
      }}
    >
      <OrbitControls />
      {children}
    </Canvas>
  )
}

export default LCanvas
