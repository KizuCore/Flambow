import loneliness from "@image/loneliness.svg";
import accessControl from "@image/access-control.svg";
import knowledge from "@image/knowledge.svg";
import "@style/ProjectSection.css";

function ProjectSection() {
  return (
    <section className="bg-project py-5">
      <div className="container pt-5">
        {/* Titre */}
        <div className="text-center b-5">
          <h2 className="fw-bold title dark-blue">Un projet qui agit pour demain</h2>
        </div>

        {/* Cartes */}
        <div className="row text-center py-5">
          {/* Carte 1 */}
          <div className="col-md-4 mb-4">
            <img src={loneliness} alt="Isolement social" className="mb-5" style={{ height: "140px" }} />
            <h4 className="fw-bold blue-cyan pb-4">Isolement social</h4>
            <p className="text-justify px-4 dark-blue">
            Flambow vise à <span className="fw-bold">rassembler des personnes de tout âge</span> autour de l’apprentissage de compétences et de connaissances. Notre projet vise donc à réduire l’isolement social de <span className="fw-bold">personnes socialement désengagées</span> (Etudiants post-covid, personnes âgées isolées géographiquement).
            </p>
          </div>

          {/* Carte 2 */}
          <div className="col-md-4 mb-4">
            <img src={accessControl} alt="Fracture numérique" className="mb-5" style={{ height: "140px" }} />
            <h4 className="fw-bold blue-cyan pb-4">Fracture numérique</h4>
            <p className="dark-blue text-justify px-4">
            La fracture numérique désigne les <span className="fw-bold">inégalités dans l&#39;usage et l&#39;accès aux technologies</span>. Notre projet se veut aussi accessible que possible afin de réduire cette fracture. Elle encourage aussi une <span className="fw-bold">reconnexion des personnes âgées</span> par un partage de connaissance avec des personnes plus connectées.
            </p>
          </div>

          {/* Carte 3 */}
          <div className="col-md-4 mb-4">
            <img src={knowledge} alt="Transmission" className="mb-5" style={{ height: "140px" }} />
            <h4 className="fw-bold blue-cyan pb-4">Transmission</h4>
            <p className="dark-blue text-justify px-4">
            Nous voulons <span className="fw-bold">partager le flambeau de la connaissance</span> afin que des savoirs ancestraux ne se perdent pas au fil des générations. Notre projet s’inscrit donc dans une démarche de <span className="fw-bold">transmission et d’échange des compétences</span> entre particuliers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
