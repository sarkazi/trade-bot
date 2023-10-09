import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={3}>
      <MeshDistortMaterial
        color="#9c36b5"
        distort={0.3}
        speed={1.5}
        attach="material"
      />
    </Sphere>
  );
}
