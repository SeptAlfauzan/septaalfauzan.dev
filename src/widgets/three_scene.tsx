"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const loader = new GLTFLoader();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const cube = new THREE.Mesh(geometry, material);
      const light = new THREE.DirectionalLight(0xffffff, 1); // soft w

      scene.add(cube);
      scene.add(light);

      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        10
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;

      //   loadGltf(scene);
      renderer.render(scene, camera);
      const renderScene = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };

      // Call the renderScene function to start the animation loop
      renderScene();
    }
  }, []);

  const loadGltf = (scene: THREE.Scene) => {
    const light = new THREE.AmbientLight(0xffffff); // soft white light

    loader.load(
      // resource URL
      "/models/phone/scene.gltf",
      // called when the resource is loaded
      function (gltf) {
        scene.add(gltf.scene);

        scene.add(light);

        console.log("LOADED");

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened");
      }
    );
  };

  return <div ref={containerRef} />;
};
export default ThreeScene;
