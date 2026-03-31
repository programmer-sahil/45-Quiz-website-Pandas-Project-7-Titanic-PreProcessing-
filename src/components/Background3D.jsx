import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Stars } from '@react-three/drei';

export default function Background3D() {
  return (
    <div className="absolute inset-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 4, 5]} intensity={1.5} />
        <Stars radius={60} depth={50} count={3000} factor={4} saturation={0} fade speed={0.7} />

        <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
          <mesh position={[-2.5, 1.5, 0]}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial color="#7c3aed" wireframe />
          </mesh>
        </Float>

        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={[2.5, -1.2, 0]}>
            <torusKnotGeometry args={[0.8, 0.25, 120, 16]} />
            <meshStandardMaterial color="#06b6d4" wireframe />
          </mesh>
        </Float>

        <Float speed={1.8} rotationIntensity={1} floatIntensity={1.5}>
          <mesh position={[0, 0.4, -1]}>
            <octahedronGeometry args={[1]} />
            <meshStandardMaterial color="#22c55e" wireframe />
          </mesh>
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
}
