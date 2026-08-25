import { Html } from "@react-three/drei";

// loader
const Loader = () => {
  return (
    <Html>
      {/* spin icon */}
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      </div>
    </Html>
  );
};

export default Loader;
