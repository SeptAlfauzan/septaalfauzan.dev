"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { useEffect, useState } from "react";
import {
  BufferGeometry,
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  NormalBufferAttributes,
  Object3DEventMap,
  SRGBColorSpace,
  Vector3,
  VideoTexture,
} from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useSpring, animated } from "@react-spring/three";

function Scene() {
  return (
    <Canvas
      dpr={[1.5, 2]}
      style={{ height: "100%", width: "100%" }}
      camera={{ fov: 50, near: 0.0001, far: 1000, position: [0, 0, 2] }}
    >
      <ambientLight color={"white"} intensity={1} position={[0, 10, 0]} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <ThreeDScene />
    </Canvas>
  );
}

const ThreeDScene = () => {
  const [active, setActive] = useState(false);
  const { scale } = useSpring({ scale: active ? 8 : 6 });
  const { y } = useSpring({ y: active ? -0.8 : -0.5 });
  const rotation = useSpring({
    y: active ? 0 : -0.8,
    x: active ? 0 : -0.2,
    z: active ? 0 : -0.2,
  });

  const position = useSpring({ x: 0 });

  const myMesh = React.useRef<
    | Mesh<
        BufferGeometry<NormalBufferAttributes>,
        Material | Material[],
        Object3DEventMap
      >
    | undefined
  >();

  const gltf = useLoader(GLTFLoader, "/models/phone _2.glb");

  useEffect(() => {
    const phoneObj =
      myMesh.current?.children[0].children[0].children[0].children[0]
        .children[0];
    // phoneObj!.children[0]!.visible = false;
    // phoneObj!.children[1]!.visible = false;
    // phoneObj!.children[2]!.visible = false;
    // phoneObj!.children[3]!.visible = false;
    // phoneObj!.children[4]!.visible = false;
    // phoneObj!.children[6]!.visible = false;
    // phoneObj!.children[7]!.visible = false;

    const phoneScreen = phoneObj!.children[7] as Mesh;
    phoneScreen.material = new MeshBasicMaterial({ color: 0xffffff });

    changeVideoTexture("/videos/video2.mp4", phoneScreen);
  }, []);

  const changeVideoTexture = async (newVideoUrl: string, mesh: Mesh) => {
    // Create a new video element
    const video = document.createElement("video");
    video.src = newVideoUrl;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    await video.play();

    const texture = new VideoTexture(video);
    texture.colorSpace = SRGBColorSpace;
    texture.flipY = false;
    texture.repeat.set(2, 1);
    texture.offset.set(-0.5, 0);
    const screenMaterial = mesh.material as MeshStandardMaterial;

    screenMaterial.map = texture;
    screenMaterial.needsUpdate = true;
  };

  return (
    <animated.mesh
      onPointerDown={() => {
        setActive(!active);
      }}
      onPointerEnter={(e) => {
        console.log(e);
      }}
      ref={myMesh as React.RefObject<Mesh<BufferGeometry>>}
      scale={scale}
      rotation-x={rotation.x}
      rotation-y={rotation.y}
      rotation-z={rotation.z}
      position-y={y}
      position-x={position.x}
    >
      <primitive object={gltf.scene} />
    </animated.mesh>
  );
};

export default Scene;
