import { Canvas } from "@react-three/fiber";

function Sphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.1, 32, 32]} />
      <meshStandardMaterial
        color="#8b5cf6"
        wireframe
      />
    </mesh>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} />
        <Sphere />
      </Canvas>
    </div>
  );
}