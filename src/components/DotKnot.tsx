import { useMemo, useRef } from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"

type DotKnotProps = {
  radius?: number
  tube?: number
  segments?: number
  speed?: number
  size?: number
}

export function DotKnot({
  radius = 2,
  tube = 0.55,
  segments = 1400,
  speed = 0.18,
  size = 0.035,
}: DotKnotProps) {
  const pointsRef = useRef<THREE.Points>(null!)

  const { positions, colors } = useMemo(() => {
    const geo = new THREE.TorusKnotGeometry(radius, tube, segments, 64)
    const pos = geo.attributes.position.array as Float32Array
    const count = geo.attributes.position.count

    const colorArray = new Float32Array(count * 3)
    const c = new THREE.Color()
    for (let i = 0; i < count; i++) {
      const t = i / count // 0..1
      c.setHSL(t, 1, 0.55) // 🌈 arco-íris
      colorArray[i * 3 + 0] = c.r
      colorArray[i * 3 + 1] = c.g
      colorArray[i * 3 + 2] = c.b
    }

    return { positions: pos, colors: colorArray }
  }, [radius, tube, segments])

  useFrame((_, d) => {
    pointsRef.current.rotation.y += d * speed
    pointsRef.current.rotation.x += d * speed * 0.5
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={colors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        sizeAttenuation
        vertexColors
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending} // ✨ brilho “neon”
      />
    </points>
  )
}
