import { Metadata } from "next";
import Scene from "@/widgets/threejs/scene";
import { Banner } from "@/templates/banner";
import { Text } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Septa Alfauzan - Portfolio",
};

export default function Home() {
  return (
    <main>
      <Banner />
      <Scene />
    </main>
  );
}
