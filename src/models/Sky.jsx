// Import React hooks and components
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// Import the 3D model file for the sky
import skyScene from "../assets/3d/sky.glb";

// Sky component definition
const Sky = ({ isRotating }) => {
  // Load the 3D model using useGLTF hook
  const sky = useGLTF(skyScene);

  // Create a reference for the sky mesh
  const skyRef = useRef();

  // Use useFrame hook for animation logic
  useFrame((_, delta) => {
    // Rotate the sky if isRotating is true
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  // Return the JSX for the Sky component with mesh and primitive
  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

// Export the Sky component as the default export
export default Sky;
