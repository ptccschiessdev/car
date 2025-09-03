import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-7";
import FeaturesSection from "@/components/features-8";
import HeroSection from "@/components/hero-section";
import Testimonials from "@/components/testimonials";
import ContentSectionBottom from "@/components/content-1";  
import FooterSection from "@/components/footer";

export default function Home() {
  return <div>
    <HeroSection />
    <FeaturesSection />
    <ContentSection />
    <CallToAction />
    <Testimonials />
    <ContentSectionBottom />
    <FooterSection />
  </div>;
}
