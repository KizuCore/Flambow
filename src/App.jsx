import ActForTomorrowSection from "./ActForTomorrowSection";
import NewsletterSection from "./NewsletterSection";
import VideoSection from "./VideoSection";
import Hero from "./Hero";
import HowDoesItWorkSection from "./HowDoesItWorkSection";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#fbfcff]">
      {/* Structure globale de la landing page. */}
      <Navbar />
      <Hero />
      <HowDoesItWorkSection />
      <ActForTomorrowSection />
      <VideoSection />
      <NewsletterSection />
    </div>
  );
}

export default App;
