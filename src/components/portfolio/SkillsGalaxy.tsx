import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html } from "@react-three/drei";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { skills } from "@/lib/portfolio-data";

function Planet({ position, name, level, color, onHover }: {
  position: [number, number, number];
  name: string;
  level: number;
  color: string;
  onHover: (n: string | null) => void;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const size = 0.18 + (level / 100) * 0.35;
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.4;
    const target = hovered ? 1.4 : 1;
    ref.current.scale.lerp(new THREE.Vector3(target, target, target), 0.1);
  });
  return (
    <group position={position}>
      <mesh
        ref={ref}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); onHover(name); document.body.style.cursor = "pointer"; }}
        onPointerOut={() => { setHovered(false); onHover(null); document.body.style.cursor = "default"; }}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={hovered ? 1.1 : 0.5} metalness={0.6} roughness={0.3} />
      </mesh>
      {hovered && (
        <Html center distanceFactor={8} style={{ pointerEvents: "none" }}>
          <div className="glass-strong whitespace-nowrap rounded-lg px-3 py-1.5 text-[11px] font-medium text-foreground">
            <span className="text-gradient-gold">{name}</span>
            <span className="ml-2 text-muted-foreground">{level}%</span>
          </div>
        </Html>
      )}
    </group>
  );
}

function Galaxy({ onHover }: { onHover: (n: string | null) => void }) {
  const positions = useMemo(() => {
    // Fibonacci sphere distribution
    const n = skills.length;
    const pts: [number, number, number][] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    const R = 3.4;
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = golden * i;
      pts.push([Math.cos(theta) * radius * R, y * R, Math.sin(theta) * radius * R]);
    }
    return pts;
  }, []);
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.08;
  });
  const palette = ["#c9a84c", "#f0d78c", "#e0b95a", "#d4c48a", "#b8912f"];
  return (
    <group ref={group}>
      {skills.map((s, i) => (
        <Planet
          key={s.name}
          position={positions[i]}
          name={s.name}
          level={s.level}
          color={palette[i % palette.length]}
          onHover={onHover}
        />
      ))}
      {/* Central sun */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial color="#f0d78c" />
      </mesh>
      <pointLight position={[0, 0, 0]} intensity={2} color="#f0d78c" distance={12} />
    </group>
  );
}

export function SkillsGalaxy() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <div className="relative h-[600px] w-full">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 55 }}>
        <color attach="background" args={["#0a0908"]} />
        <ambientLight intensity={0.15} />
        <Stars radius={30} depth={40} count={2500} factor={3} fade speed={0.6} />
        <Galaxy onHover={setHovered} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
        {hovered ? <span className="text-gold">{hovered}</span> : "Drag to explore · hover a planet"}
      </div>
    </div>
  );
}
