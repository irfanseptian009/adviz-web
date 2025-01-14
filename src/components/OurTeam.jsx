import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber'
import { useFBO, useGLTF, useScroll, Text, Image, Scroll, Preload, ScrollControls, MeshTransmissionMaterial } from '@react-three/drei'
import { easing } from 'maath'

export default function OurTeam() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-800 via-slate-800 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-10 pt-8">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-orange-500 text-center mb-4 drop-shadow-lg">
            Meet Our Team
          </h1>
          <p className="text-xl text-white/80 text-center max-w-2xl mx-auto">
            Discover the talented individuals behind our success
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }} className="w-full h-full">
        <ScrollControls damping={0.2} pages={3} distance={0.5}>
          <Lens>
            <Scroll>
              <Typography />
              <Images />
            </Scroll>
            <Scroll html>
              <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 text-white/90" 
                   style={{ transform: 'translate3d(65vw, 192vh, 0)' }}>
                <h3 className="text-2xl font-bold mb-2">Innovative Solutions</h3>
                <p className="text-white/80 mb-4">Creating cutting-edge digital experiences</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Premium Quality
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Expert Team
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Global Reach
                  </li>
                </ul>
              </div>
            </Scroll>
            <Preload />
          </Lens>
        </ScrollControls>
      </Canvas>

      {/* Overlay gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
    </div>
  )
}

function Lens({ children, damping = 0.15, ...props }) {
  const ref = useRef()
  const { nodes } = useGLTF('/lens-transformed.glb')
  const buffer = useFBO()
  const viewport = useThree((state) => state.viewport)
  const [scene] = useState(() => new THREE.Scene())
  useFrame((state, delta) => {
    const viewport = state.viewport.getCurrentViewport(state.camera, [0, 0, 15])
    easing.damp3(
      ref.current.position,
      [(state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2, 15],
      damping,
      delta
    )
    state.gl.setRenderTarget(buffer)
    state.gl.setClearColor('#1e1b4b') // Darker indigo for better contrast
    state.gl.render(scene, state.camera)
    state.gl.setRenderTarget(null)
  })
  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} />
      </mesh>
      <mesh scale={0.25} ref={ref} rotation-x={Math.PI / 2} geometry={nodes.Cylinder.geometry} {...props}>
        <MeshTransmissionMaterial 
          buffer={buffer.texture} 
          ior={1.2} 
          thickness={1.5} 
          anisotropy={0.1} 
          chromaticAberration={0.04}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
        />
      </mesh>
    </>
  )
}

function Images() {
  const group = useRef()
  const data = useScroll()
  const { width, height } = useThree((state) => state.viewport)
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
  })
  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="/img1.jpg" />
      <Image position={[2, 0, 3]} scale={3} url="/img6.jpg" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3, 1]} url="/trip2.jpg" />
      <Image position={[-0.6, -height, 9]} scale={[1, 2, 1]} url="/img8.jpg" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="/trip4.jpg" />
      <Image position={[0, -height * 1.5, 7.5]} scale={[1.5, 3, 1]} url="/img3.jpg" />
      <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 1.1, 1]} url="/img7.jpg" />
    </group>
  )
}

function Typography() {
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(state.camera, [0, 0, 12])
  const shared = { 
    font: '/Inter-Regular.woff', 
    letterSpacing: -0.1, 
    color: '#f472b6', // Pink color for text
    fontSize: 2,
    'material-toneMapped': false
  }
  return (
    <>
      <Text children="Bisnis" anchorX="left" position={[-width / 2.5, -height / 10, 12]} {...shared}>
        <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={0.5} />
      </Text>
      <Text children="solution" anchorX="right" position={[width / 2.5, -height * 2, 12]} {...shared}>
        <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={0.5} />
      </Text>
      <Text children="Adviz" position={[0, -height * 4.624, 12]} {...shared}>
        <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={0.5} />
      </Text>
    </>
  )
}