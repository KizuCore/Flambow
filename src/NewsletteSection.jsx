function NewsletterSection() {
    return (
      <section className="py-5 bg-white">
        <div className="container text-center">
          {/* Titre */}
          <h2 className="fw-bold mb-3">Envie de rejoindre l’aventure ...</h2>
          <p className="mb-4">
            Suivez les dernières actualités en vous inscrivant à la newsletter !
          </p>
  
          {/* Formulaire d'inscription */}
          <div className="d-flex justify-content-center">
            <div className="input-group" style={{ maxWidth: "500px" }}>
              <input
                type="email"
                className="form-control rounded-pill-start"
                placeholder="Votre adresse mail"
                aria-label="Votre adresse mail"
              />
              <button
                className="btn btn-dark rounded-pill-end"
                type="button"
                aria-label="Envoyer"
              >
                &#10132; {/* Icône flèche */}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default NewsletterSection;
  