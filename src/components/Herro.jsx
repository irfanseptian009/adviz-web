import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import AnimatedParticles from './threejs/AnimatedParticles';
import CompanyInfo from './threejs/CompanyInfo';

const CameraController = ({ zoomOut, onZoomComplete }) => {
  const { camera } = useThree();
  const targetZoom = zoomOut ? 50 : 100; 
  const zoomSpeed = 0.5; 

  useFrame(() => {
    if (zoomOut) {
      if (camera.position.z < targetZoom) {
        camera.position.z += zoomSpeed;
      } else {
        onZoomComplete();
      }
    }
  });

  return null;
};

const HeroSection = () => {
  const [zoomOut, setZoomOut] = useState(false);
  const nextSectionRef = useRef(null);

  const handleScroll = (e) => {
    if (!zoomOut) {
      e.preventDefault(); 
      setZoomOut(false);
    }
  };

  const handleZoomComplete = () => {
 
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [zoomOut]);

  return (
    <>
      {/* Bagian Hero */}
      <section className="w-full h-screen overflow-hidden bg-gradient-to-b from-blue-600 to-indigo-900 relative">
        {/* Konten Informasi Perusahaan */}
        <div className="absolute flex flex-col items-center justify-center h-full text-center text-white px-4">
          <CompanyInfo />
        </div>
        {/* Canvas untuk Three.js */}
        <Canvas className="absolute top-0 left-0 w-full h-full">
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            {/* Komponen Partikel Animasi */}
            <AnimatedParticles />
          </Suspense>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          <OrbitControls enableZoom={true} />
          {/* Komponen Kontrol Kamera */}
          <CameraController zoomOut={zoomOut} onZoomComplete={handleZoomComplete} />
        </Canvas>
      </section>
      
 
    </>
  );
};

export default HeroSection;
