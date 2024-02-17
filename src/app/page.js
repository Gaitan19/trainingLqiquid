import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeServices from "@/components/Home/HomeServices";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero
        title="Boost your Software team with LATAM talent. Go Beyond Staff Augmentation"
        text="Whether you need one developer or an entire team, we have the expertise to find the right fit for your project. Plus, with our flexible engagement models, you can choose the level of support that works best for your needs"
        buttonText="Get in touch"
      />
      <HomeServices />
    </main>
  );
}
