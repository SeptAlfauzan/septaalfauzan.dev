import ThreeScene from "@/widgets/three_scene";
export const runtime = "edge";
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <p>My Post: {params.slug}</p>
      <ThreeScene />
    </div>
  );
}
