import { Canvas } from '@react-three/fiber'

import Horde from './Horde'

function Scene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Horde scale={0.5} />
    </Canvas>
  )
}

export default Scene
