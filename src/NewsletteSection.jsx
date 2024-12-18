import "@style/News.css";

function NewsletterSection() {
  return (
    <section className="py-5 bg-dark-blue text-white">
      <div className="container text-center mt-5">
        {/* Titre */}
        <h2 className="fw-bold mb-5 title">
          Envie de rejoindre l’aventure ...
        </h2>
        <p className="mb-4 text-news fw-bold pb-4">
          Suivez les dernières actualités en vous inscrivant à la newsletter !
        </p>

        {/* Formulaire news */}
        <div className="d-flex justify-content-center pb-4">
          <div className="input-group" style={{ maxWidth: "650px" }}>
            {/* Champ de saisie */}
            <input
              type="email"
              className="form-control email-input rounded-pill-start py-3 fw-bold"
              placeholder="Votre adresse mail"
              aria-label="Votre adresse mail"
            />
            {/* Bouton flèche */}
            <button
              className="btn arrow-btn rounded-pill-end"
              type="button"
              aria-label="Envoyer"
            >
              <svg
                className="arrow-icon"
                width="50"
                height="30"
                viewBox="0 0 38 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="arrow-path"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.0874963 7.40215C-0.45417 2.53965 4.55208 -1.03118 8.975 1.06465L33.8583 12.8521C38.625 15.1084 38.625 21.8917 33.8583 24.148L8.975 35.9376C4.55208 38.0334 -0.452087 34.4626 0.0874963 29.6001L1.0875 20.5834H18C18.5525 20.5834 19.0824 20.3639 19.4731 19.9732C19.8638 19.5825 20.0833 19.0526 20.0833 18.5001C20.0833 17.9475 19.8638 17.4176 19.4731 17.0269C19.0824 16.6362 18.5525 16.4167 18 16.4167H1.08958L0.0874963 7.40215Z"
                  fill="#133C5C"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
