import { Canvas } from '@react-three/fiber'

import Model from './Scene'

function Home() {
  return (
    <Canvas camera={{ position: [-100, -100, 100], fov: 100 }}>
      <ambientLight />
      <Model position={[50, 0, 0]} />
    </Canvas>
  )
}

export default Home
