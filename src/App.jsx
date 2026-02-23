import "@style/globals.css";
import ProjectSection from "./ProjectSection";
import NewsletterSection from "./NewsletterSection";
import VideoSection from "./VideoSection";
import Hero from "./Hero";
import FunctionSection from "./FunctionSection";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="desktop">
      {/* Header */}
      <Navbar/>

      {/* Section d'introduction */}
      <Hero />

      {/* Section comment ça fonctionne */}
      <FunctionSection />

      {/* Section de présentation du projet */}
      <ProjectSection />

      {/* Section vidéo de démonstration */}
      <VideoSection />

      {/* Section de newsletter */}
      <NewsletterSection />
    </div>
  );
}

export default App;
