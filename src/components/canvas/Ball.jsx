import React, { forwardRef, Suspense, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.8} />
      <spotLight intensity={2} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#FFF8FC"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const ControlledOrbitControls = () => {
  const { camera, clock } = useThree();
  const controlsRef = useRef();
  const isReturning = useRef(false);
  const initialPosition = useRef(new THREE.Vector3());
  const initialQuaternion = useRef(new THREE.Quaternion());
  const path = useRef([]);
  const returnStartTime = useRef(0);
  const returnDuration = 1; // Return duration in seconds

  useFrame(() => {
    if (controlsRef.current && isReturning.current) {
      const elapsedTime = clock.getElapsedTime() - returnStartTime.current;
      const progress = Math.min(elapsedTime / returnDuration, 1);

      if (progress < 1) {
        const index = Math.floor(progress * (path.current.length - 1));
        const { position, quaternion } = path.current[index];
        camera.position.copy(position);
        camera.quaternion.copy(quaternion);
      } else {
        camera.position.copy(initialPosition.current);
        camera.quaternion.copy(initialQuaternion.current);
        isReturning.current = false;
        path.current = [];
        console.log("Return finished.");
      }
      controlsRef.current.update();
    }
  });

  useEffect(() => {
    const controls = controlsRef.current;
    if (controls) {
      initialPosition.current.copy(camera.position);
      initialQuaternion.current.copy(camera.quaternion);

      const onStart = () => {
        isReturning.current = false;
        path.current = [];
        console.log("User interaction started.");
      };

      const onChange = () => {
        if (!isReturning.current) {
          path.current.push({
            position: camera.position.clone(),
            quaternion: camera.quaternion.clone(),
          });
        }
      };

      const onEnd = () => {
        isReturning.current = true;
        path.current.reverse();
        returnStartTime.current = clock.getElapsedTime();
        console.log("User interaction ended. Starting return animation.");
      };

      controls.addEventListener("start", onStart);
      controls.addEventListener("change", onChange);
      controls.addEventListener("end", onEnd);

      return () => {
        controls.removeEventListener("start", onStart);
        controls.removeEventListener("change", onChange);
        controls.removeEventListener("end", onEnd);
      };
    }
  }, [camera, clock]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      enableRotate={true}
      enableDamping
      dampingFactor={0.05}
    />
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ControlledOrbitControls />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
