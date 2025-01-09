import { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
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

CameraController.propTypes = {
  zoomOut: PropTypes.bool.isRequired,
  onZoomComplete: PropTypes.func.isRequired,
};


const HeroSection = () => {

  return (
    <>
      {/* Hero Section */}
      <section className="w-full h-screen bg-gradient-to-b from-[#100b32] via-black to-black relative">
        {/* Company Information Content */}
        <div className="absolute flex flex-col items-center justify-center h-full text-center text-white px-4">
          <CompanyInfo />
        </div>
        {/* Canvas for Three.js */}
        <Canvas className="absolute top-0 left-0 w-full h-full">
          {/* Animated Particles Component */}
          <Suspense fallback={null}>
            <AnimatedParticles />
          </Suspense>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          <OrbitControls enableZoom={false} />
          <CameraController zoomOut={false} onZoomComplete={() => { }} />
        </Canvas>
      </section>
    </>
  );
};

export default HeroSection;