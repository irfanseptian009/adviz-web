
import  { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

const AnimatedSphere = () => {
  const meshRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;

      // Menggerakkan objek sedikit berdasarkan posisi mouse
      meshRef.current.position.x += (mouse.x * 2 - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (mouse.y * 2 - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#6D28D9"
        distort={0.4}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
};

export default AnimatedSphere;
