import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { SystemPositioning } from "@/components/sections/SystemPositioning";
import { ProofSystem } from "@/components/sections/ProofSystem";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Process, Principles } from "@/components/sections/ProcessPrinciples";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between w-full overflow-x-clip">
      <Hero />
      <Capabilities />
      <SystemPositioning />
      <ProofSystem />
      <BrandsMarquee />
      <FeaturedProjects />
      <Process />
      <Principles />
      <Footer />
    </main>
  );
}
