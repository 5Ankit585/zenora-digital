import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 1800 }) {
  const ref = useRef();
  const { mouse } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    ref.current.rotation.x = mouse.y * 0.05;
    ref.current.rotation.z = mouse.x * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingSphere({ position, color, size, speed }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.getElapsedTime() * speed) * 0.5;
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

function GridLines() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = -Math.PI / 2.5;
    ref.current.position.y = -3 + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices = [];
    const size = 20;
    const divisions = 20;
    for (let i = 0; i <= divisions; i++) {
      const v = (i / divisions) * size - size / 2;
      vertices.push(-size / 2, v, 0, size / 2, v, 0);
      vertices.push(v, -size / 2, 0, v, size / 2, 0);
    }
    geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    return geo;
  }, []);

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#6c2fff" transparent opacity={0.07} />
    </lineSegments>
  );
}

function NeuralRing({ radius, y, speed }) {
  const ref = useRef();
  const nodes = useMemo(() => {
    const n = 12;
    return Array.from({ length: n }, (_, i) => {
      const angle = (i / n) * Math.PI * 2;
      return [Math.cos(angle) * radius, y, Math.sin(angle) * radius];
    });
  }, [radius, y]);

  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const verts = [];
    nodes.forEach((n, i) => {
      const next = nodes[(i + 1) % nodes.length];
      verts.push(...n, ...next);
      if (i % 3 === 0) {
        const skip = nodes[(i + 4) % nodes.length];
        verts.push(...n, ...skip);
      }
    });
    geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, [nodes]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * speed;
  });

  return (
    <group ref={ref}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#00d4ff" transparent opacity={0.2} />
      </lineSegments>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'block'
        }}
        resize={{ scroll: false }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} color="#8b5cf6" intensity={2} />
        <pointLight position={[-5, -3, 3]} color="#00d4ff" intensity={1.5} />

        <ParticleField />
        <GridLines />

        <FloatingSphere position={[-3.5, 1, -2]} color="#6c2fff" size={1.2} speed={0.5} />
        <FloatingSphere position={[4, -1, -3]} color="#00d4ff" size={0.9} speed={0.7} />
        <FloatingSphere position={[0.5, 2.5, -4]} color="#8b5cf6" size={0.6} speed={0.9} />

        <NeuralRing radius={2.5} y={0} speed={0.12} />
        <NeuralRing radius={1.5} y={1} speed={-0.08} />
      </Canvas>

      {/* Gradient overlays */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(108,47,255,0.12) 0%, transparent 70%)' }} 
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#04040f] to-transparent pointer-events-none" />
    </div>
  );
}