import { Suspense, useEffect, useState, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Flowers = ({ isMobile }) => {
  const flower = useGLTF("./daisies/daisies.gltf");
  return (
    <mesh className="!touch-pan-y">
      <hemisphereLight intensity={2.5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[200, 500, 6000]}
        angle={45}
        penumbra={1}
        intensity={1}
        castshadow
      />
      <spotLight
        position={[-200, -500, -6000]}
        angle={45}
        penumbra={1}
        intensity={1}
        castshadow
      />
      <primitive
        object={flower.scene}
        scale={isMobile ? 65 : 65}
        position={isMobile ? [0, -3.8, 0] : [0, -3.8, 0]}
        rotation={[0, 1.3, 0]}
      />
    </mesh>
  );
};

const RotatingControls = ({ rotations = 2, initialRotation = 1.3 }) => {
  const controlsRef = useRef();
  const { camera, gl } = useThree();

  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current;

      let frame = 0;
      const totalFrames = 180; // Adjust for speed
      const totalRotation = Math.PI * 2 * rotations;

      function animate() {
        if (frame < totalFrames) {
          const progress = frame / totalFrames;
          const easing = 1 - Math.pow(1 - progress, 4); // Cubic ease-out
          const currentRotation = totalRotation * easing + initialRotation;

          camera.position.x = Math.sin(currentRotation) * 20;
          camera.position.z = Math.cos(currentRotation) * 20;
          camera.lookAt(0, 0, 0);

          controls.update();
          frame++;
          requestAnimationFrame(animate);
        } else {
          // Ensure it stops exactly at the initial rotation (front)
          const finalRotation = initialRotation;
          camera.position.x = Math.sin(finalRotation) * 20;
          camera.position.z = Math.cos(finalRotation) * 20;
          camera.lookAt(0, 0, 0);
          controls.update();
        }
      }

      animate();
    }
  }, [camera, rotations, initialRotation]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableRotate={true}
      enablePan={false}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}
    />
  );
};

const FlowersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

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
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="flex grow mt-1 mx-auto !touch-pan-y"
    >
      <Suspense fallback={<CanvasLoader />}>
        <RotatingControls rotations={2} initialRotation={1.3} />
        <Flowers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default FlowersCanvas;
