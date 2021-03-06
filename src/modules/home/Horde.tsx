/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Huargenn (https://sketchfab.com/Huargenn)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/symbol-of-the-horde-7d7b5df58fe7468695b629ec77f30171
title: Symbol of the Horde
*/

import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial
  }
}

export default function Horde(props: MeshProps) {
  const { scale } = props
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/scene.gltf') as GLTFResult
  return (
    <group ref={group} scale={scale} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials['Scene_-_Root']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
