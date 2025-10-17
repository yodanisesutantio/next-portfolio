/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";

// Component for the Cauldron
const KemudiComponent = () => {
  const { scene } = useGLTF("./3d-component/kemudi-isometric.glb"); // Adjust path as needed
  return (
    <primitive
      object={scene}
      position={[0, 0, 0]} // Set position relative to the Environment
    />
  );
};

const Kemudi = () => {
  const cameraRef = useRef();

  // Adjust camera to focus on the Environment's center
  // useEffect(() => {
  //   if (cameraRef.current) {
  //     cameraRef.current.position.set(5, 5, 10); // Adjust the position
  //     cameraRef.current.lookAt(0, 7, 0);
  //   }
  // }, []);

  return (
    <div className="w-full h-full overflow-visible">
      <Canvas className="bg-transparent overflow-visible pt-16" style={{ overflow: 'visible' }}>
        <PerspectiveCamera
          // ref={cameraRef}
          makeDefault
          position={[3, 3, 4]}
          fov={60}
        />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 20, 5]} intensity={1.3} />
        {/* Hemisphere Light */}
        <hemisphereLight
          skyColor={"#87CEEB"} // Light blue for the sky
          groundColor={"#FFFFFF"} // White or light ground reflection
          intensity={1} // Adjust brightness
        />
        <KemudiComponent />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Kemudi;
