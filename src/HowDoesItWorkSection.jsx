function HowDoesItWorkSection() {
  return (
    <section>
      <div className="section-header">
        <h1>Comment ça fonctionne ?</h1>
        <p>
          Jeunes ou Seniors, vos compétences nous intéressent ! <br />
          Flambow met en relation des personnes de différents âges afin qu&apos;il échangent leur connaissance et leurs compétences dans des cours ludiques en petit comités.
        </p>
      </div>

      <div className="steps">
        <div className="step-card">
          <div className="step-card-content">
            <h2 >Crée ton compte</h2>
            <p>
              Un parcours ludique, adapté à vos besoin où vous pourrez renseigner vos ambitions
            </p>
          </div>
          <div className="step-number-badge">
            <h1 className="step-number-text">1</h1>
          </div>
        </div>

        <div className="step-card">
          <div className="step-card-content">
            <h2>Trouve une annonce</h2>
            <p>
              Trouve la personne qui saura t&apos;apprendre une nouvelle compétence sur notre page d&apos;annonces
            </p>
          </div>
          <div className="step-number-badge">
            <h1 className="step-number-text">2</h1>
          </div>
        </div>

        <div className="step-card">
          <div className="step-card-content">
            <h2>Organise une rencontre</h2>
            <p>
              Prends contact avec ton professeur et rencontre le pour échanger !
            </p>
          </div>
          <div className="step-number-badge">
            <h1 className="step-number-text">3</h1>
          </div>
        </div>
      </div>

      <div className="complementary-info">
        <h1>Tu souhaites partager tes compétences ?</h1>
        <p>
          Flambow t&apos;accompagne dans la création de ton annonce et dans toutes les étapes de réservation en proposant une interface personnalisée, un système de chat et un système de paiement sécurisé.
        </p>
      </div>
    </section>
  );
}

export default HowDoesItWorkSection;
