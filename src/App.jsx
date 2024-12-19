import "@style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectSection from "./ProjectSection";
import NewsletterSection from "./NewsletteSection";
import Intro from "./Intro";
import FunctionIntro from "./FuntionSection";
import LogoFull from "@image/logo-full.svg";
import LogoIcon from "@image/logo-icon.svg";

function App() {
  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <header className="d-flex py-1">
        <div className="">
          <img src={LogoFull}  alt="Logo Flambow Entier" className="ps-5 logo-full"style={{ height: "80px" }}/>
          <img
            src={LogoIcon}
            alt="Logo Flambow"
            className="logo-icon my-1 ps-3"
            style={{ height: "50px" }}
          />
        </div>
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
