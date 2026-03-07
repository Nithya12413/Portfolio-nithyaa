'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function MoonModel() {
    const group = useRef<THREE.Group>(null);
    const ringRef1 = useRef<THREE.Mesh>(null);
    const ringRef2 = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
        }
        if (ringRef1.current) {
            ringRef1.current.rotation.x = state.clock.elapsedTime * 0.2;
            ringRef1.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
        if (ringRef2.current) {
            ringRef2.current.rotation.x = state.clock.elapsedTime * -0.15;
            ringRef2.current.rotation.y = state.clock.elapsedTime * 0.25;
        }
    });

    return (
        <group ref={group}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5}>
                {/* Core Moon */}
                <Sphere args={[1, 64, 64]} scale={1.4}>
                    <MeshDistortMaterial
                        color="#e2e8f0"
                        emissive="#2a2a3a"
                        emissiveIntensity={0.2}
                        attach="material"
                        distort={0.12}
                        speed={0.5}
                        roughness={0.9}
                        metalness={0.1}
                        envMapIntensity={0.5}
                    />
                </Sphere>

                {/* Orbiting rings */}
                <mesh ref={ringRef1}>
                    <torusGeometry args={[2.5, 0.015, 16, 100]} />
                    <meshStandardMaterial
                        color="#3B82F6"
                        emissive="#3B82F6"
                        emissiveIntensity={1}
                        transparent
                        opacity={0.6}
                    />
                </mesh>

                <mesh ref={ringRef2}>
                    <torusGeometry args={[2.9, 0.01, 16, 100]} />
                    <meshStandardMaterial
                        color="#06B6D4"
                        emissive="#06B6D4"
                        emissiveIntensity={1}
                        transparent
                        opacity={0.4}
                    />
                </mesh>

                {/* Orbiting tiny satellites / stars */}
                <mesh position={[2.2, 1, 1]}>
                    <sphereGeometry args={[0.15, 16, 16]} />
                    <meshStandardMaterial color="#DBEAFE" emissive="#DBEAFE" emissiveIntensity={0.4} roughness={0.3} />
                </mesh>
                <mesh position={[-1.8, -1.5, 1.2]}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshStandardMaterial color="#3B82F6" emissive="#3B82F6" emissiveIntensity={0.6} roughness={0.2} />
                </mesh>
                <mesh position={[0, 2.2, -1.5]}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.8} />
                </mesh>
            </Float>
        </group>
    );
}

export default function HeroScene() {
    return (
        <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9D84FF" />

                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    rotation={[0, 0, 0]}
                    polar={[-Math.PI / 4, Math.PI / 4]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                >
                    <MoonModel />
                </PresentationControls>

                <Environment preset="city" />
                <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={10} blur={2} far={4} />
            </Canvas>
        </div>
    );
}
