import { Header } from "./components/Header";
import { WelcomeSection } from "./components/WelcomeSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TopDestinationsSession } from "./components/TopDestinationsSession";
import { Footer } from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <WelcomeSection />
        <FeaturesSection />
        <TopDestinationsSession />
      </main>
      <Footer />
    </div>
  );
}
