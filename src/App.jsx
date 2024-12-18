import "@style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectSection from "./ProjectSection";
import NewsletterSection from "./NewsletteSection";
import Intro from "./Intro";
import FunctionIntro from "./FuntionSection";

function App() {
  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <header className="d-flex py-4">
        <h1 className="fw-bold ps-5" style={{ marginLeft: "100px" }}>
          Flambow
        </h1>
      </header>

      {/* Section d'introduction */}
      <Intro />

      {/* Section comment ça fonctionne */}
      <FunctionIntro />

      {/* Section de présentation du projet */}
      <ProjectSection />

      {/* Section de newsletter */}
      <NewsletterSection />
    </div>
  );
}

export default App;
