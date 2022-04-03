import { Canvas, MeshProps } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function Box(props: MeshProps) {
  const { position } = props
  const mesh = useRef<THREE.Mesh>(null!)
  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  )
}
function Home() {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  )
}

export default Home
