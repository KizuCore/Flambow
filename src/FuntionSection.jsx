import "@style/FunctionSection.css";
import headIdea from "@image/head-idea.svg";
import twoHeads from "@image/two-heads.svg";

function FunctionIntro() {
  return (
    <section className="py-5 bg-dark-blue text-white">
      <div className="functionContainer">
        <div className="container mb-4">
          {/* Titre + texte */}
          <div className="text-center mb-5">
            <h2 className="fw-bold title uppercase text-white mb-5 mt-5">
              Comment ça fonctionne ?
            </h2>
            <p className="text-one pt-4">
              <h3 className="fw-bold text-title">
                Faites le lien : les seniors enseignent aux jeunes, et vice
                versa !
              </h3>
            </p>
            <h4 className="text-title">
              Échangez des compétences auprès de volontaires motivés.
            </h4>
          </div>

          {/* Grille contenu */}
          <div className="row  py-5">
            {/* Liste des étapes */}
            <div className="col-md-8">
              <h3 className="fw-bold mb-5 text-title">
                Tu souhaites apprendre :
              </h3>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-start mb-5">
                  <span className="step-circle me-5">1</span>
                  <p className="mb-0 text-li">Crée ton compte</p>
                </li>
                <li className="d-flex justify-content-start mb-5">
                  <span className="step-circle me-5">2</span>
                  <p className="mb-0 text-li">
                    Renseigne les compétences que tu voudrais acquérir sur
                    Flambow
                  </p>
                </li>
                <li className="d-flex justify-content-start mb-5">
                  <span className="step-circle me-5">3</span>
                  <p className="mb-0 fw-bold text-li">
                    Si une annonce t&#39;intéresse, trouve une disponibilité
                    avec la personne qui la propose
                  </p>
                </li>
                <li className="d-flex justify-content-start">
                  <span className="step-circle me-5">4</span>
                  <p className="mb-0 text-li">
                    Apprends une nouvelle compétence !
                  </p>
                </li>
              </ul>
            </div>

            {/* SVG */}
            <div className="col-md-4 d-flex justify-content-end align-items-center">
              <img
                src={headIdea}
                alt="Personne ayant une idée"
                className="mb-5"
                style={{ height: "314px" }}
              />
            </div>
          </div>

          <div className="row pt-5">
            {/* SVG */}
            <div className="col-md-5 d-flex justify-content-start align-items-center">
              <img
                src={twoHeads}
                alt="2 Personnes qui échangent leurs idées"
                className="mb-5"
                style={{ height: "290px" }}
              />
            </div>
            {/* Liste des étapes */}
            <div className="col-md-7">
              <h3 className="text-title fw-bold mb-5">
                Tu souhaites partager tes compétences :
              </h3>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-start mb-5">
                  <span className="step-circle me-5">1</span>
                  <p className="mb-0 text-li">Crée ton compte</p>
                </li>
                <li className="d-flex justify-content-start mb-5">
                  <span className="step-circle me-5">2</span>
                  <p className="mb-0 text-li">
                    Flambow, propose les compétences que tu veux partager
                  </p>
                </li>
                <li className="d-flex justify-content-start mb-5">
                  <span className="step-circle me-5">3</span>
                  <p className="mb-0 text-li">
                    Tu reçois une notification si une personne est intéressée
                  </p>
                </li>
                <li className="d-flex justify-content-start mb-5">
                  <span className="step-circle me-5">4</span>
                  <p className="mb-0 text-li">
                    Trouve une disponibilité avec cette personne
                  </p>
                </li>
                <li className="d-flex justify-content-start">
                  <span className="step-circle me-5">5</span>
                  <p className="mb-0 text-li">Partage-lui ta compétence !</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="video-container text-center my-5">
          <h3 className="text-title fw-bold mb-5">
            Découvrez la vidéo de démonstration !
          </h3>
          <div className="d-flex justify-content-center">
            <div className="ratio ratio-16x9 w-75 w-md-50">
              <iframe
                src="https://www.youtube.com/embed/rDQa5mwbwWQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FunctionIntro;
