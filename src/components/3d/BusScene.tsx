'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PresentationControls, Text } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function BusModel() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.5;
        }
    });

    return (
        <group ref={group}>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                {/* Main Body */}
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[4, 1.5, 1.5]} />
                    <meshPhysicalMaterial
                        color="#FF6B9E"
                        metalness={0.6}
                        roughness={0.2}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>

                {/* Windows */}
                <mesh position={[0, 0.2, 0.76]}>
                    <boxGeometry args={[3.8, 0.6, 0.05]} />
                    <meshPhysicalMaterial color="#0A0512" metalness={0.9} roughness={0.1} transmission={0.9} thickness={0.5} />
                </mesh>
                <mesh position={[0, 0.2, -0.76]}>
                    <boxGeometry args={[3.8, 0.6, 0.05]} />
                    <meshPhysicalMaterial color="#0A0512" metalness={0.9} roughness={0.1} transmission={0.9} thickness={0.5} />
                </mesh>

                {/* Wheels */}
                <mesh position={[-1.2, -0.8, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                <mesh position={[1.2, -0.8, 0.8]} rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                <mesh position={[-1.2, -0.8, -0.8]} rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                <mesh position={[1.2, -0.8, -0.8]} rotation={[Math.PI / 2, 0, 0]}>
                    <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
                    <meshStandardMaterial color="#222" />
                </mesh>

                {/* Text/Logo on bus */}
                <Text
                    position={[0, 0.2, 0.8]}
                    fontSize={0.3}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                >
                    PASS
                </Text>
            </Float>
        </group>
    );
}

export default function BusScene() {
    return (
        <div className="w-full h-full cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <spotLight position={[5, 5, 5]} angle={0.2} penumbra={1} intensity={2} color="#9D84FF" />

                <PresentationControls
                    global
                    config={{ mass: 1, tension: 200 }}
                    snap={{ mass: 2, tension: 400 }}
                    rotation={[0.1, Math.PI / 6, 0]}
                >
                    <BusModel />
                </PresentationControls>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
