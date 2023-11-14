import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

// Import the 3D model file for the bird
import birdScene from "../assets/3d/bird.glb";

// Bird component definition
const Bird = () => {
  // Create a reference for the bird mesh
  const birdRef = useRef();

  // Load the 3D model and animations using useGLTF and useAnimations hooks
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  // Start playing the "Take 001" animation when the component mounts
  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  // Use the useFrame hook for animation logic
  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate flight in a sin wave pattern
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Adjust bird rotation based on its position relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    // Move the bird along the X and Z axes based on its rotation
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  // Return the JSX for the Bird component with position, scale, and reference
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

// Export the Bird component as the default export
export default Bird;
