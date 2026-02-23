import "@style/globals.css";
import ActForTomorrowSection from "./ActForTomorrowSection";
import NewsletterSection from "./NewsletterSection";
import VideoSection from "./VideoSection";
import Hero from "./Hero";
import HowDoesItWorkSection from "./HowDoesItWorkSection";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="desktop">
      {/* Header */}
      <Navbar/>

      {/* Section d'introduction */}
      <Hero />

      {/* Section comment ça fonctionne */}
      <HowDoesItWorkSection />

      {/* Section de présentation du projet */}
      <ActForTomorrowSection />

      {/* Section vidéo de démonstration */}
      <VideoSection />

      {/* Section de newsletter */}
      <NewsletterSection />
    </div>
  );
}

export default App;
