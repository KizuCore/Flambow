function FunctionSection() {
  return (
    <section className="how-does-it-work">
      <div className="steps-intro">
        <h2 className="comment-a-fonctionne">Comment ça fonctionne ?</h2>
        <p className="jeunes-ou-seniors-vos-comp-tences-nous-int-ressent-flambow-met-en-relation-des-personnes-de-diff-rents-ges-afin-qu-il-changent-leur-connaissance-et-leurs-comp-tences-dans-des-cours-ludiques-en-petit-comit-s">
          Jeunes ou Seniors, vos compétences nous intéressent ! <br />
          Flambow met en relation des personnes de différents âges afin qu'il échangent leur connaissance et leurs compétences dans des cours ludiques en petit comités.
        </p>
      </div>

      <div className="steps-grid">
        <div className="step-card">
          <div className="step-card-content">
            <h3 className="cr-e-ton-compte">Crée ton compte</h3>
            <p className="un-parcours-ludique-adapt-vos-besoin-o-vous-pourrez-renseigner-vos-ambitions">
              Un parcours ludique, adapté à vos besoin où vous pourrez renseigner vos ambitions
            </p>
          </div>
          <div className="step-number-badge">
            <div className="step-number-text">1</div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-card-content">
            <h3 className="cr-e-ton-compte">Trouve une annonce</h3>
            <p className="un-parcours-ludique-adapt-vos-besoin-o-vous-pourrez-renseigner-vos-ambitions">
              Trouve la personne qui saura t'apprendre une nouvelle compétence sur notre page d'annonces
            </p>
          </div>
          <div className="step-number-badge">
            <div className="step-number-text">2</div>
          </div>
        </div>

        <div className="step-card">
          <div className="step-card-content">
            <h3 className="cr-e-ton-compte">Organise une rencontre</h3>
            <p className="un-parcours-ludique-adapt-vos-besoin-o-vous-pourrez-renseigner-vos-ambitions">
              Prends contact avec ton professeur et rencontre le pour échanger !
            </p>
          </div>
          <div className="step-number-badge">
            <div className="step-number-text">3</div>
          </div>
        </div>
      </div>

      <div className="cta-box-primary">
        <h3 className="tu-souhaites-partager-tes-comp-tences">Tu souhaites partager tes compétences ?</h3>
        <p className="flambow-t-accompagne-dans-la-cr-ation-de-ton-annonce-et-dans-toutes-les-tapes-de-r-servation-en-proposant-une-interface-personnalis-e-un-syst-me-de-chat-et-un-syst-me-de-paiement-s-curis">
          Flambow t'accompagne dans la création de ton annonce et dans toutes les étapes de réservation en proposant une interface personnalisée, un système de chat et un système de paiement sécurisé.
        </p>
      </div>
    </section>
  );
}

export default FunctionSection;
