import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import ThreeScene from "@/widgets/three_scene";
import Scene from "@/widgets/threejs/scene";

export const metadata: Metadata = {
  title: "Septa Alfauzan - Portfolio",
};

export default function Home() {
  return <Scene />;
}
