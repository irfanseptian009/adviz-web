import { Suspense, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import AnimatedParticles from './threejs/AnimatedParticles';
import CompanyInfo from './threejs/CompanyInfo';
import { motion } from 'framer-motion';

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

  useEffect(() => {
    const handleScroll = () => {
     
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-50" 
           style={{ backgroundImage: 'url("/noise.png")', backgroundRepeat: 'repeat' }}></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">
        {/* Company Information */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          {/* Glowing ring behind content */}
          <div className="absolute w-[800px] h-[800px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          
          {/* Glass card effect */}
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl">
            <CompanyInfo />
          </div>

       
        </motion.div>

        {/* Three.js Canvas */}
        <Canvas className="absolute inset-0">
          <Suspense fallback={null}>
            <AnimatedParticles />
          </Suspense>
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1.5}
          />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <CameraController zoomOut={false} onZoomComplete={() => {}} />
        </Canvas>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-2 h-2 bg-white/60 rounded-full"
          />
        </div>
        <span className="mt-2 text-sm font-light">Scroll to explore</span>
      </motion.div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none"
           style={{
             background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)'
           }}></div>
    </section>
  );
};

export default HeroSection;