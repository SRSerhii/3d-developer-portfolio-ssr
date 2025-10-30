import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/scene-transformed.glb");

  return (
    <>
      {/* Ambient light - good to have it outside the group if it's global */}
      <hemisphereLight intensity={0.35} groundColor="black" />

      {/* Point light for general illumination */}
      <pointLight intensity={2} position={[2, 3, 2]} />

      {/* Spotlight for a more directed light source */}
      <spotLight
        position={[-5, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={512}
      />

      {/* The model itself */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.37}
        position={isMobile ? [0, -1.0, -0.5] : [0, -1.25, -0.6]}
        rotation={[-0.01, -0.4, -0.15]}
      />
    </>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [15, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;