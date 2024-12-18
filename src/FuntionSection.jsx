import "@style/FunctionSection.css";
import headIdea from "@image/head-idea.svg";
import twoHeads from "@image/two-heads.svg";

function FunctionIntro() {
  return (
    <section className="py-5 bg-dark-blue text-white">
      <div className="container mb-4">
        {/* Titre + texte */}
        <div className="text-center mb-5">
          <h2 className="fw-bold title uppercase text-white mb-5 mt-5">Comment ça fonctionne ?</h2>
          <p className="text-one pt-4">
            <span className="fw-bold text-title">
              Jeunes ou seniors, vos compétences nous intéressent !
            </span>
          </p>
          <p className="text-title">
            Échangez des compétences auprès de volontaires motivés.
          </p>
        </div>

        {/* Grille contenu */}
        <div className="row fw-bold py-5">
          {/* Liste des étapes */}
          <div className="col-md-8">
            <h3 className="fw-bold mb-5 text-title">Tu souhaites apprendre :</h3>
            <ul className="list-unstyled">
              <li className="d-flex mb-5">
                <span className="step-circle me-5">1</span>
                <p className="mb-0 text-li">Crée ton compte</p>
              </li>
              <li className="d-flex mb-5">
                <span className="step-circle me-5">2</span>
                <p className="mb-0 text-li">
                  Renseigne les compétences que tu voudrais acquérir sur Flambow
                </p>
              </li>
              <li className="d-flex mb-5">
                <span className="step-circle me-5">3</span>
                <p className="mb-0 fw-bold text-li">
                  Si une annonce t&#39;intéresse, trouve une disponibilité avec
                  la personne qui la propose
                </p>
              </li>
              <li className="d-flex">
                <span className="step-circle me-5">4</span>
                <p className="mb-0 text-li">Apprends une nouvelle compétence !</p>
              </li>
            </ul>
          </div>

          {/* SVG */}
          <div className="col-md-4 d-flex justify-content-end align-items-center">
            <img src={headIdea} alt="Personne ayant une idée" className="mb-5" style={{ height: "314px" }} />
          </div>
        </div>

        <div className="row fw-bold pt-5">
          {/* SVG */}
          <div className="col-md-5 d-flex justify-content-start align-items-center">
          <img src={twoHeads} alt="2 Personnes qui échangent leurs idées" className="mb-5" style={{ height: "290px" }} />
          </div>
          {/* Liste des étapes */}
          <div className="col-md-7">
            <h3 className="text-title fw-bold mb-5">
              Tu souhaites partager tes compétences :
            </h3>
            <ul className="list-unstyled">
              <li className="d-flex mb-5">
                <span className="step-circle me-5">1</span>
                <p className="mb-0 text-li">Crée ton compte</p>
              </li>
              <li className="d-flex mb-5">
                <span className="step-circle me-5">2</span>
                <p className="mb-0 text-li">
                  Flambow, propose les compétences que tu veux partager
                </p>
              </li>
              <li className="d-flex mb-5">
                <span className="step-circle me-5">3</span>
                <p className="mb-0 text-li">
                  Tu reçois une notification si une personne est intéressée
                </p>
              </li>
              <li className="d-flex mb-5">
                <span className="step-circle me-5">4</span>
                <p className="mb-0 text-li">
                  Trouve une disponibilité avec cette personne
                </p>
              </li>
              <li className="d-flex">
                <span className="step-circle me-5">5</span>
                <p className="mb-0 text-li">Partage-lui ta compétence !</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FunctionIntro;
