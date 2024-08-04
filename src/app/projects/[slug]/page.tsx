import ThreeScene from "@/widgets/three_scene";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <p>My Post: {params.slug}</p>
      <ThreeScene />
    </div>
  );
}
