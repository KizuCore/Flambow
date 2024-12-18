import "@style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectSection from "./ProjectSection";
import NewsletterSection from "./NewsletteSection";

function App() {
  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <header className="bg-light d-flex py-4">
        <h1 className="fw-bold ps-5">Flambow</h1>
      </header>








      {/* Section d'introduction */}
      <section className="bg-secondary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <div className="text-end">
                <h2 className="fw-bold">Bienvenue sur Flambow !</h2>
                <p className="lead">
                  La solution pour connecter les générations
                </p>
                <button className="btn btn-dark">Découvrez le prototype</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section fonctionnement */}
      <section className="py-5">
        <div className="container">
          {/* Titre */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">Comment ça fonctionne ?</h2>
            <p className="fw-bold">
              <span className="text-dark">
                Jeunes ou seniors, vos compétences nous intéressent !
              </span>
            </p>
            <p className="text-muted">
              Échangez des compétences auprès de volontaires motivés.
            </p>
          </div>











          {/* Grille pour contenu */}
          <div className="row fw-bold pb-5">
            {/* Liste des étapes */}
            <div className="col-md-7">
              <h3 className="fw-bold mb-4">Tu souhaites apprendre :</h3>
              <ul className="list-unstyled">
                <li className="d-flex mb-3">
                  <span className="step-circle me-3">1</span>
                  <p className="mb-0">Crée ton compte</p>
                </li>
                <li className="d-flex mb-3">
                  <span className="step-circle me-3">2</span>
                  <p className="mb-0">
                    Renseigne les compétences que tu voudrais acquérir sur
                    Flambow
                  </p>
                </li>
                <li className="d-flex mb-3">
                  <span className="step-circle me-3">3</span>
                  <p className="mb-0 fw-bold">
                    Si une annonce t&#39;intéresse, trouve une disponibilité avec la
                    personne qui la propose
                  </p>
                </li>
                <li className="d-flex">
                  <span className="step-circle me-3">4</span>
                  <p className="mb-0">Apprends une nouvelle compétence !</p>
                </li>
              </ul>
            </div>

            {/* Carré gris */}
            <div className="col-md-5 d-flex justify-content-end align-items-center">
              <div className="bg-light square-placeholder"></div>
            </div>
          </div>








          <div className="row fw-bold pt-5">
            {/* Carré gris */}
            <div className="col-md-5 d-flex justify-content-start align-items-center">
              <div className="bg-light square-placeholder"></div>
            </div>
            {/* Liste des étapes */}
            <div className="col-md-7">
              <h3 className="fw-bold mb-4">Tu souhaites partager tes compétences :</h3>
              <ul className="list-unstyled">
                <li className="d-flex mb-3">
                  <span className="step-circle me-3">1</span>
                  <p className="mb-0">Crée ton compte</p>
                </li>
                <li className="d-flex mb-3">
                  <span className="step-circle me-3">2</span>
                  <p className="mb-0">
                    Flambow, propose les compétences que tu veux partager
                  </p>
                </li>
                <li className="d-flex mb-3">
                  <span className="step-circle me-3">3</span>
                  <p className="mb-0">
                    Tu reçois une notification si une personne est intéressée
                  </p>
                </li>
                <li className="d-flex mb-3">
                  <span className="step-circle me-3">4</span>
                  <p className="mb-0">Trouve une disponibilité avec cette personne</p>
                </li>
                <li className="d-flex">
                  <span className="step-circle me-3">5</span>
                  <p className="mb-0">Partage-lui ta compétence !</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    <ProjectSection />

    <NewsletterSection/>





    </div>
  );
}

export default App;
