import loneliness from "@image/loneliness.svg";
import knowledge from "@image/knowledge.svg";
import accessControl from "@image/access-control.svg";

function ProjectSection() {
  return (
    <section className="how-does-it-work2">
      <svg className="project-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <line x1="0" y1="50" x2="100" y2="50" stroke="#cccccc" strokeWidth="1" opacity="0.3" />
      </svg>

      <div className="project-container">
        <div className="project-inner">
          <h2 className="un-projet-qui-agit-pour-demain">Un projet qui agit pour demain</h2>

          <div className="project-cards-grid">
            <div className="project-card">
              <img src={loneliness} alt="Isolement social" className="vector3" />
              <h3 className="isolement-social">Isolement social</h3>
              <p className="flambow-vise-rassembler-des-personnes-de-tout-ge-autour-de-l-apprentissage-de-comp-tences-et-de-connaissances-notre-projet-vise-donc-r-duire-l-isolement-social-de-personnes-socialement-d-sengag-es-etudiants-post-covid-personnes-g-es-isol-es-g-ographiquement">
                Flambow vise à rassembler des personnes de tout âge autour de l&apos;apprentissage de compétences et de connaissances. Notre projet vise donc à réduire l&apos;isolement social de personnes socialement désengagées (Etudiants post-covid, personnes âgées isolées géographiquement).
              </p>
            </div>

            <div className="project-card">
              <img src={knowledge} alt="Transmission" className="vector4" />
              <h3 className="transmission">Transmission</h3>
              <p className="nous-voulons-partager-le-flambeau-de-la-connaissance-afin-que-des-savoirs-ancestraux-ne-se-perdent-pas-au-fil-des-g-n-rations-notre-projet-s-inscrit-donc-dans-une-d-marche-de-transmission-et-d-change-des-comp-tences-entre-particuliers">
                Nous voulons partager le flambeau de la connaissance afin que des savoirs ancestraux ne se perdent pas au fil des générations. Notre projet s&apos;inscrit donc dans une démarche de transmission et d&apos;échange des compétences entre particuliers.
              </p>
            </div>

            <div className="project-card">
              <img src={accessControl} alt="Fracture numérique" className="vector5" />
              <h3 className="fracture-num-rique">Fracture numérique</h3>
              <p className="la-fracture-num-rique-d-signe-les-in-galit-s-dans-l-usage-et-l-acc-s-aux-technologies-notre-projet-se-veut-aussi-accessible-que-possible-afin-de-r-duire-cette-fracture-elle-encourage-aussi-une-reconnexion-des-personnes-g-es-par-un-partage-de-connaissance-avec-des-personnes-plus-connect-es">
                La fracture numérique désigne les inégalités dans l&apos;usage et l&apos;accès aux technologies. Notre projet se veut aussi accessible que possible afin de réduire cette fracture. Elle encourage aussi une reconnexion des personnes âgées par un partage de connaissance avec des personnes plus connectées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
