import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

function Moon() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Create a realistic moon texture procedurally
  const moonTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d")!;

    // Base moon surface - lighter grey with warm tones
    const baseGrad = ctx.createRadialGradient(512, 512, 0, 512, 512, 512);
    baseGrad.addColorStop(0, "#e0ddd8");
    baseGrad.addColorStop(0.5, "#c8c4bc");
    baseGrad.addColorStop(1, "#b0aca4");
    ctx.fillStyle = baseGrad;
    ctx.fillRect(0, 0, 1024, 1024);

    // Maria (dark patches - like the real moon's "seas")
    const maria = [
      { x: 350, y: 300, r: 120, color: "rgba(100, 95, 88, 0.4)" },
      { x: 600, y: 400, r: 90, color: "rgba(95, 90, 85, 0.35)" },
      { x: 200, y: 500, r: 100, color: "rgba(105, 98, 90, 0.3)" },
      { x: 700, y: 250, r: 70, color: "rgba(90, 85, 80, 0.35)" },
      { x: 450, y: 650, r: 110, color: "rgba(100, 95, 88, 0.3)" },
    ];
    maria.forEach(({ x, y, r, color }) => {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
      grad.addColorStop(0, color);
      grad.addColorStop(1, "rgba(180, 175, 168, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Large craters with shadows and rims
    const craters = [
      { x: 200, y: 200, r: 50 }, { x: 500, y: 150, r: 35 },
      { x: 700, y: 350, r: 60 }, { x: 300, y: 500, r: 45 },
      { x: 150, y: 700, r: 40 }, { x: 600, y: 600, r: 55 },
      { x: 800, y: 200, r: 30 }, { x: 400, y: 350, r: 25 },
      { x: 550, y: 800, r: 38 }, { x: 850, y: 550, r: 42 },
      { x: 100, y: 400, r: 28 }, { x: 750, y: 700, r: 33 },
    ];
    craters.forEach(({ x, y, r }) => {
      // Shadow inside
      const shadowGrad = ctx.createRadialGradient(x + r * 0.15, y + r * 0.15, 0, x, y, r);
      shadowGrad.addColorStop(0, "rgba(80, 75, 70, 0.5)");
      shadowGrad.addColorStop(0.5, "rgba(120, 115, 108, 0.3)");
      shadowGrad.addColorStop(1, "rgba(180, 175, 168, 0)");
      ctx.fillStyle = shadowGrad;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      // Bright rim on upper-left
      ctx.strokeStyle = "rgba(220, 218, 212, 0.4)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, r * 0.85, -Math.PI * 0.8, -Math.PI * 0.1);
      ctx.stroke();
    });

    // Small craters
    for (let i = 0; i < 60; i++) {
      const cx = Math.random() * 1024;
      const cy = Math.random() * 1024;
      const cr = Math.random() * 12 + 3;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
      grad.addColorStop(0, `rgba(${90 + Math.random() * 30}, ${85 + Math.random() * 30}, ${80 + Math.random() * 25}, 0.35)`);
      grad.addColorStop(1, "rgba(180, 175, 168, 0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, cr, 0, Math.PI * 2);
      ctx.fill();
    }

    // Surface noise
    for (let i = 0; i < 2000; i++) {
      const cx = Math.random() * 1024;
      const cy = Math.random() * 1024;
      const cr = Math.random() * 2 + 0.5;
      const brightness = Math.floor(150 + Math.random() * 60);
      ctx.fillStyle = `rgba(${brightness}, ${brightness - 3}, ${brightness - 8}, 0.08)`;
      ctx.beginPath();
      ctx.arc(cx, cy, cr, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Bump map for surface detail
  const bumpTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#808080";
    ctx.fillRect(0, 0, 512, 512);

    for (let i = 0; i < 500; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const r = Math.random() * 8 + 1;
      const shade = Math.floor(60 + Math.random() * 80);
      ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      const baseSpeed = hovered ? 0.8 : 0.05;
      meshRef.current.rotation.y += baseSpeed * 0.016;
    }
  });

  return (
    <group>
      <Sphere
        args={[1, 128, 128]}
        ref={meshRef}
        scale={1}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <meshStandardMaterial
          map={moonTexture}
          bumpMap={bumpTexture}
          bumpScale={0.03}
          roughness={0.95}
          metalness={0}
          emissive="#e8e4dc"
          emissiveIntensity={0.03}
        />
      </Sphere>
      {/* Glow ring */}
      <Sphere args={[1.06, 32, 32]}>
        <meshBasicMaterial
          color="#d4e8ff"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

const Landing3D = () => {
  return (
    <div className="landing-3d-wrapper">
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 3, 5]} intensity={4} color="#fff" />
        <pointLight position={[-3, -1, -3]} intensity={0.3} color="#8ecae6" />
        <Moon />
      </Canvas>
    </div>
  );
};

export default Landing3D;
