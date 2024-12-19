import "@style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectSection from "./ProjectSection";
import NewsletterSection from "./NewsletteSection";
import Intro from "./Intro";
import FunctionIntro from "./FuntionSection";
import LogoFull from "@image/logo-full.svg";
import LogoIcon from "@image/logo-icon.svg";

// Import des icônes de react-icons
import { BsEnvelope, BsInstagram, BsFacebook } from "react-icons/bs";

function App() {
  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center py-1 px-5">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src={LogoFull}
            alt="Logo Flambow Entier"
            className="ps-3 logo-full"
            style={{ height: "80px" }}
          />
          <img
            src={LogoIcon}
            alt="Logo Flambow"
            className="logo-icon my-1 ps-3"
            style={{ height: "50px" }}
          />
        </div>

        {/* Icônes */}
        <div className="d-flex align-items-center">
          <a
            href="mailto:contact.flambow@gmail.com"
            className="text-dark mx-3 img-nav"
            aria-label="Email"
          >
            <BsEnvelope size={28} />
          </a>
          <a
            href="https://www.instagram.com/flambow__/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-3 img-nav"
            aria-label="Instagram"
          >
            <BsInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61570522210745"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark mx-3 img-nav"
            aria-label="Facebook"
          >
            <BsFacebook size={24} />
          </a>
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
