import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Avatar() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock, mouse }, delta) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    // Breathing scale
    const s = 1 + Math.sin(t * 1.2) * 0.02;
    ref.current.scale.setScalar(s);
    // Mouse parallax rotation
    ref.current.rotation.y += (mouse.x * 0.6 - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (-mouse.y * 0.3 - ref.current.rotation.x) * 0.05;
    ref.current.rotation.z += delta * 0.05;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.4, 5]} />
        <MeshDistortMaterial
          color="#c9a84c"
          emissive="#8b6f2a"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.9}
          distort={0.35}
          speed={1.6}
        />
      </mesh>
      <mesh scale={0.55}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial color="#f0d78c" transparent opacity={0.25} />
      </mesh>
      <mesh rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[0.75, 0.004, 16, 200]} />
        <meshBasicMaterial color="#c9a84c" transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[0.92, 0.003, 16, 200]} />
        <meshBasicMaterial color="#f0d78c" transparent opacity={0.45} />
      </mesh>
    </Float>
  );
}

function FloatingIcons() {
  // Small glowing shapes orbiting the avatar (code/AI/cap/trophy abstractions)
  const items = new Array(16).fill(0).map((_, i) => ({
    r: 1.8 + (i % 3) * 0.35,
    speed: 0.2 + (i % 5) * 0.06,
    y: (i - 8) * 0.22,
    size: 0.055 + (i % 4) * 0.02,
    phase: (i / 16) * Math.PI * 2,
  }));
  return (
    <group>
      {items.map((it, i) => <OrbitIcon key={i} {...it} />)}
    </group>
  );
}

function OrbitIcon({ r, speed, y, size, phase }: { r: number; speed: number; y: number; size: number; phase: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + phase;
    ref.current.position.set(Math.cos(t) * r, y + Math.sin(t * 2) * 0.2, Math.sin(t) * r);
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.015;
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial color="#f0d78c" emissive="#c9a84c" emissiveIntensity={1.2} metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 42 }} gl={{ antialias: true, alpha: true }}>
      <color attach="background" args={["#0a0908"]} />
      <fog attach="fog" args={["#0a0908", 6, 16]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#f0d78c" />
      <pointLight position={[-5, -3, -3]} intensity={0.6} color="#c9a84c" />
      <Avatar />
      <FloatingIcons />
      <Sparkles count={220} scale={[12, 10, 6]} size={2} speed={0.4} color="#f0d78c" opacity={0.7} />
      <Environment preset="night" />
    </Canvas>
  );
}
