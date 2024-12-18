import loneliness from "@image/loneliness.png";
import accessControl from "@image/access-control.png";
import knowledge from "@image/knowledge.png";

function ProjectSection() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        {/* Titre */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Un projet qui agit pour demain</h2>
        </div>

        {/* Cartes */}
        <div className="row text-center">
          {/* Carte 1 */}
          <div className="col-md-4 mb-4">
            <img src={loneliness} alt="Isolement social" className="mb-3" style={{ height: "80px" }} />
            <h4 className="fw-bold">Isolement social</h4>
            <p className="text-muted text-justify px-4">
            Flambow vise à rassembler des personnes de tout âge autour de l’apprentissage de compétences et de connaissances. Notre projet vise donc à réduire l’isolement social de personnes socialement désengagées (Etudiants post-covid, personnes âgées isolées géographiquement).
            </p>
          </div>

          {/* Carte 2 */}
          <div className="col-md-4 mb-4">
            <img src={accessControl} alt="Fracture numérique" className="mb-3" style={{ height: "80px" }} />
            <h4 className="fw-bold">Fracture numérique</h4>
            <p className="text-muted text-justify px-4">
            La fracture numérique désigne les inégalités dans l&#39;usage et l&#39;accès aux technologies. Notre projet se veut aussi accessible que possible afin de réduire cette fracture. Elle encourage aussi une reconnexion des personnes âgées par un partage de connaissance avec des personnes plus connectées.
            </p>
          </div>

          {/* Carte 3 */}
          <div className="col-md-4 mb-4">
            <img src={knowledge} alt="Transmission" className="mb-3" style={{ height: "80px" }} />
            <h4 className="fw-bold">Transmission</h4>
            <p className="text-muted text-justify px-4">
            Nous voulons partager le flambeau de la connaissance afin que des savoirs ancestraux ne se perdent pas au fil des générations. Notre projet s’inscrit donc dans une démarche de transmission et d’échange des compétences entre particuliers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
