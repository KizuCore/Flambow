import "@style/News.css";
import axios from "axios";
import { useState } from "react";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Fonction pour vérifier la validité de l'email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const submitEmail = async () => {
    if (!email || !isValidEmail(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    setIsLoading(true);

    try {
      // Récupérer emails existants
      const getResponse = await axios.get(import.meta.env.VITE_JSONBIN_URL, {
        headers: {
          "X-Master-Key":
            "$2a$10$Zu66Zb596EucIxusOyr2g./I7qeHJAJY7ByzT3hNEWnrNQqW.2HV2",
        },
      });

      const existingEmails = getResponse.data.record.emails || [];

      // Ajouter email à liste existante
      const updatedEmails = [...existingEmails, email];

      // Envoyer MAJ
      const putResponse = await axios.put(
        import.meta.env.VITE_JSONBIN_URL,
        { emails: updatedEmails },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key":
              "$2a$10$Zu66Zb596EucIxusOyr2g./I7qeHJAJY7ByzT3hNEWnrNQqW.2HV2",
          },
        }
      );

      if (putResponse.status === 200) {
        alert("Votre email a été ajouté avec succès à la newsletter !");
        setEmail(""); // Réinitialiser le champ d'entrée
      } else {
        alert("Une erreur s'est produite lors de votre ajout à la newsletter.");
      }
    } catch (error) {
      console.error("Erreur réseau ou de configuration :", error);
      alert("Une erreur s'est produite. Veuillez vérifier votre connexion.");
    } finally {
      setIsLoading(false);
    }
  };

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
              value={email}
              onChange={handleInputChange}
              disabled={isLoading} // Désactiver champ en cours de traitement
            />
            {/* Bouton flèche */}
            <button
              className="arrow-btn rounded-pill-end"
              type="button"
              aria-label="Envoyer"
              onClick={submitEmail}
              disabled={isLoading} // Désactiver bouton en cours de traitement
            >
              {isLoading ? (
                <div className="spinner-border custom-spinner" role="status">
                  <span className="visually-hidden">Chargement...</span>
                </div>
              ) : (
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
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
