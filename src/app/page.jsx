import CallToAction from "@/components/CallToAction";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Maintenance from "@/components/Maintenance";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import WorkProcess from "@/components/WorkProcess";

export default function Home() {
  return (
    <main className="w-full mx-auto">
      <Hero />
      <Features />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <WorkProcess />
      <Maintenance />
      <CallToAction />
    </main>
  );
}
