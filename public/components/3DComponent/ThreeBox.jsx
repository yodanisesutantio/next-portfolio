import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const ThreeBox = () => {
  const meshRef = useRef();

  return (
    <>
      <ambientLight intensity={0.8} />
      <mesh ref={meshRef}>
        <boxGeometry args={[3, 3, 3]} />
        <meshBasicMaterial color="#97F" />
      </mesh>
    </>
  );
};

export default ThreeBox;
