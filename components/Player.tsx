export type PlayerProps = {
  radius?: number;
  height?: number;
}

export default function Player({ radius = 0.2, height = 1.4 }): React.FC<PlayerProps> {
  return (
    <>
      <mesh visible userData={{ hello: 'world' }} position={[0, 0, 0]}>
        <cylinderGeometry args={[radius, radius, height, 3]} />
      </mesh>
    </>
  )
}
