import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function Scene() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * 0.3
    mesh.current.rotation.y += delta * 0.45
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1.2} />
      <mesh ref={mesh} scale={1.6}>
        <icosahedronGeometry args={[1, 1]} />
        {/* 👇 aqui é onde o erro estava */}
        <meshStandardMaterial
          wireframe={true}
          transparent={true}
          opacity={0.35}
          color="#00ffff"
        />
      </mesh>
    </>
  )
}
