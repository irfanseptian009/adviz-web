
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const AnimatedParticles = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const particles = Array.from({ length: 200 }).map((_, i) => ({
    id: i,
    position: [
      Math.random() * 20 - 10,
      Math.random() * 20 - 10,
      Math.random() * 20 - 10,
    ],
    color: '#ffffff',
  }));

  return (
    <group ref={groupRef}>
      {particles.map((particle) => (
        <mesh key={particle.id} position={particle.position}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color={particle.color} />
        </mesh>
      ))}
    </group>
  );
};

export default AnimatedParticles;
