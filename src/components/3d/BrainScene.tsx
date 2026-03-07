'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PresentationControls, Instances, Instance } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function BrainNodes() {
    const group = useRef<THREE.Group>(null);

    // Generating a spherical distribution of nodes like a neural network
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < 150; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const radius = 1.5 + Math.random() * 0.5; // Brain-like shape variation

            const x = radius * Math.sin(phi) * Math.cos(theta);
            // Squash slightly to make it look like a brain
            const y = (radius * Math.sin(phi) * Math.sin(theta)) * 0.8;
            const z = radius * Math.cos(phi);

            temp.push({ position: [x, y, z] as [number, number, number], scale: 0.05 + Math.random() * 0.1 });
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.2;
            group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <group ref={group}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Instances limit={150} range={150}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshStandardMaterial color="#9D84FF" emissive="#9D84FF" emissiveIntensity={0.8} />
                    {particles.map((data, i) => (
                        <Instance key={i} position={data.position} scale={data.scale} />
                    ))}
                </Instances>

                {/* Core glowing brain center */}
                <mesh>
                    <sphereGeometry args={[1.2, 32, 32]} />
                    <meshPhysicalMaterial
                        color="#FF6B9E"
                        emissive="#FF6B9E"
                        emissiveIntensity={0.2}
                        transmission={0.9}
                        thickness={0.5}
                        roughness={0.2}
                    />
                </mesh>
            </Float>
        </group>
    );
}

export default function BrainScene() {
    return (
        <div className="w-full h-full cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#FF6B9E" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#9D84FF" />

                <PresentationControls
                    global
                    config={{ mass: 1, tension: 200 }}
                    snap={{ mass: 2, tension: 400 }}
                    rotation={[0.1, Math.PI / 4, 0]}
                >
                    <BrainNodes />
                </PresentationControls>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
