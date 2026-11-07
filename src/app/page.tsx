import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import Capabilities from "@/components/home/Capabilities";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <SelectedWork />
      <Capabilities />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
