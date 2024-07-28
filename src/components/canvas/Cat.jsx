import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

const Cat = ({ canvasSize }) => {
  const cat = useGLTF("./cat/scene.gltf");
  const { camera, scene } = useThree();
  const catRef = useRef();

  useEffect(() => {
    if (cat.scene && canvasSize.width > 0 && canvasSize.height > 0) {
      // Calculate scale
      var scale = 1;
      switch (canvasSize.height) {
        case 800:
          scale = 1;
          break;
        case 400:
          scale = 0.5 + canvasSize.height / canvasSize.width;
          break;
        case 300:
          scale = 0.9 + canvasSize.height / canvasSize.width;
          break;
        case 250:
          scale = 1.1 + canvasSize.height / canvasSize.width;
          break;

        case 200:
          scale = 1.7 + canvasSize.height / canvasSize.width;
          break;
      }
      cat.scene.scale.setScalar(scale);
      cat.scene.position.set(0, 0, 0);
      cat.scene.updateMatrixWorld();

      // Calculate bounding box
      const box = new THREE.Box3().setFromObject(cat.scene);
      const center = box.getCenter(new THREE.Vector3());

      // Move the model so its center is at (0, 0, 0)
      cat.scene.position.sub(center);

      // Calculate the distance the camera should be from the center of the object
      const fov = camera.fov * (Math.PI / 180);

      // Position camera

      camera.position.set(0, 0, (1 / canvasSize.width) * 22000); // Multiply by 1.5 to give some extra space
      camera.lookAt(new THREE.Vector3(0, 0, 0));
      camera.updateProjectionMatrix();
      // console.log("canvas width: ", canvasSize.width);
      // console.log("fov: ", fov);
      // console.log("cat scale: ", cat.scene.scale);
      // console.log("cat position: ", cat.scene.position);
      // console.log("camera position: ", camera.position);
    }
  }, [cat.scene, camera, canvasSize]);

  useFrame(() => {
    if (catRef.current) {
      catRef.current.rotation.y += 0.005;
    }
  });

  return <primitive className="h-[200px]" ref={catRef} object={cat.scene} />;
};

const CatCanvas = () => {
  const canvasContainerRef = useRef();
  const [canvasSize, setCanvasSize] = useState({ width: 1, height: 1 });

  useEffect(() => {
    const container = canvasContainerRef.current;
    if (!container) return;

    const updateSize = () => {
      setCanvasSize({
        width: container.clientWidth,
        height: container.clientHeight,
      });
    };

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(container);

    // Initial size update
    updateSize();

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={canvasContainerRef} className="flex w-full h-full">
      <Canvas
        className="flex w-full h-full !touch-pan-y"
        shadows
        camera={{ position: [0, 0, 5], fov: 75 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Cat canvasSize={canvasSize} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight
            position={[5, 5, 5]}
            angle={0.3}
            penumbra={0.5}
            intensity={1.5}
            castShadow
          />
          <spotLight
            position={[-5, 5, -5]}
            angle={0.3}
            penumbra={0.5}
            intensity={1.5}
            castShadow
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default CatCanvas;
