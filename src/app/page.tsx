"use client";
import * as THREE from "three";
import { Metadata } from "next";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RapierRigidBody,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";

import Projects from "@/templates/projects";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { RefObject, useEffect, useRef, useState } from "react";
import Band from "@/components/common/band";
import { Box } from "@chakra-ui/react";

// export const metadata: Metadata = {
//   title: "Septa Alfauzan - Portfolio",
// };
export const runtime = "edge";
export default function Home() {
  return (
    <main>
      {/* <svg
        className="line-guide"
        width="495"
        height="3389"
        viewBox="0 0 495 3389"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="#B700FF"
          stroke-width="4"
          className="line-guide"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M362.024 62.6038C355.843 61.443 351.167 56.0176 351.167 49.5C351.167 42.1362 357.136 36.1667 364.5 36.1667C371.864 36.1667 377.833 42.1362 377.833 49.5C377.833 56.001 373.181 61.4153 367.024 62.5949C368.09 356.84 404.963 545.172 435.804 702.689C440.802 728.218 445.642 752.938 450.145 777.168C482.879 953.292 497.792 1103.46 426.401 1349.7C372.761 1534.71 281.327 1660.53 197.488 1775.89C169.749 1814.06 142.842 1851.09 118.41 1888.74C69.2294 1964.52 29.9641 2042.91 13.6598 2138.47C-2.6447 2234.02 3.97931 2346.94 46.8971 2491.79C132.861 2781.92 224.44 2930.7 302.304 2996.72C321.678 3013.14 340.164 3024.41 357.471 3031.47C358.255 2996.52 359.689 2963.84 362.009 2936.29C365.043 2900.26 377.909 2880.54 395.426 2873.55C412.793 2866.63 433.546 2872.74 451.28 2885.6C469.088 2898.52 484.425 2918.61 491.136 2940.84C497.869 2963.14 495.928 2987.68 478.958 3009.05C462.172 3030.2 437.041 3045 406.054 3045.97C392.468 3046.39 377.821 3044.15 362.32 3038.67C360.316 3140 363.561 3258.66 366.421 3326.3C372.874 3327.23 377.833 3332.79 377.833 3339.5C377.833 3346.86 371.864 3352.83 364.5 3352.83C357.136 3352.83 351.167 3346.86 351.167 3339.5C351.167 3333.19 355.544 3327.91 361.425 3326.52C358.549 3258.49 355.275 3138.73 357.357 3036.81C338.964 3029.57 319.424 3017.79 299.071 3000.53C220.06 2933.55 128.139 2783.58 42.1031 2493.21C-0.979176 2347.81 -7.73017 2234.1 8.73099 2137.63C25.1922 2041.15 64.8332 1962.11 114.215 1886.01C138.874 1848.02 165.933 1810.78 193.765 1772.48C277.5 1657.25 368.226 1532.39 421.599 1348.3C492.708 1103.04 477.871 953.708 445.23 778.082C440.732 753.883 435.896 729.184 430.9 703.666C400.05 546.11 363.091 357.352 362.024 62.6038ZM362.43 3033.39C377.993 3039.1 392.555 3041.38 405.899 3040.97C435.272 3040.06 459.078 3026.05 475.042 3005.95C490.823 2986.07 492.694 2963.3 486.349 2942.29C479.982 2921.2 465.349 2901.98 448.345 2889.65C431.267 2877.26 412.363 2872.18 397.277 2878.2C382.341 2884.15 369.957 2901.49 366.991 2936.71C364.64 2964.63 363.202 2997.86 362.43 3033.39Z"
        />
      </svg> */}

      {/* <Banner /> */}
      {/* <Scene /> */}
      <Box height={"100vh"}>
        <Banner />
      </Box>
      <Projects />
    </main>
  );
}

const Banner = () => {
  return (
    <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
      <ambientLight intensity={Math.PI} />
      <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
        <Band />
      </Physics>
      <Environment background blur={0.75}>
        {/* <color attach="background" args={["black"]} /> */}
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  );
};
