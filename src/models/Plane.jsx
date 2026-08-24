// Import React hooks and components
import { useEffect, useMemo, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { clone } from "three/addons/utils/SkeletonUtils.js";

// Import the 3D model file for the plane
import planeScene from "../assets/3d/plane.glb";

// Plane component definition
const Plane = ({ isRotating, ...props }) => {
  // Create a reference for the plane mesh
  const ref = useRef();

  // Load the 3D model and animations using useGLTF and useAnimations hooks
  const { scene, animations } = useGLTF(planeScene);
  const clonedScene = useMemo(() => clone(scene), [scene]);
  const { actions } = useAnimations(animations, ref);

  // Use useEffect to play or stop the animation based on the isRotating prop
  useEffect(() => {
    // Play the animation if isRotating is true, otherwise stop it
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
      actions["Take 001"]?.stop();
    }
  }, [actions, isRotating]);

  // Return the JSX for the Plane component with mesh and primitive
  return (
    <mesh {...props} ref={ref} dispose={null}>
      <primitive object={clonedScene} />
    </mesh>
  );
};

// Export the Plane component as the default export
export default Plane;
