import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MediaSection } from './components/MediaSection';
import { ServicesSection } from './components/ServicesSection';
import { SocialProofSection } from './components/SocialProofSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <Header />
      <HeroSection />
      <MediaSection />
      <ServicesSection />
      <SocialProofSection />
      <Footer />
    </div>
  );
}
