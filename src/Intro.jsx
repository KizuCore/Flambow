import "@style/Intro.css";
import oldYoung from "@image/old-young.png";
import eyeClose from "@image/eye-close.svg";
import eyeOpen from "@image/eye-open.svg";

function Intro() {
  return (
    <section className="bg-landing py-5 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <div className="text-end mt-5">
              <h2 className="fw-bold title dark-blue pb-4">
                Bienvenue sur Flambow !
              </h2>
              <p className="lead title-secondary pb-5">
                La solution pour connecter les générations
              </p>
              <button
                className="btn button-flambow mb-5 py-3 px-5 position-relative"
                href="https://www.figma.com/proto/bubsLIrWj3jZFcVGyW6tS9/Maquettes?node-id=1-6&t=qXto5S8tiGBm86pg-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=19%3A2090&show-proto-sidebar=1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  window.open(
                    "https://www.figma.com/proto/bubsLIrWj3jZFcVGyW6tS9/Maquettes?node-id=1-6&t=qXto5S8tiGBm86pg-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A2&starting-point-node-id=19%3A2090&show-proto-sidebar=1",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Découvrez le prototype
                {/* SVG Eye */}
                <span className="eye-icon ms-4">
                  <img src={eyeClose} alt="Eye close" className="eye-close" />
                  <img src={eyeOpen} alt="Eye open" className="eye-open" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={oldYoung}
        alt="Générations connectées"
        className="image-bottom-left"
      />
    </section>
  );
}

export default Intro;
