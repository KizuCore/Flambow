import axios from "axios";
import { useState } from "react";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      const getResponse = await axios.get(import.meta.env.VITE_JSONBIN_URL, {
        headers: {
          "X-Master-Key":
            "$2a$10$Zu66Zb596EucIxusOyr2g./I7qeHJAJY7ByzT3hNEWnrNQqW.2HV2",
        },
      });

      const existingEmails = getResponse.data.record.emails || [];
      const updatedEmails = [...existingEmails, email];

      const putResponse = await axios.put(
        import.meta.env.VITE_JSONBIN_URL,
        { emails: updatedEmails },
        {
          headers: {
            "Content-Type": "application/json",
            "X-Master-Key":
              "$2a$10$Zu66Zb596EucIxusOyr2g./I7qeHJAJY7ByzT3hNEWnrNQqW.2HV2",
          },
        },
      );

      if (putResponse.status === 200) {
        alert("Votre email a été ajouté avec succès à la newsletter !");
        setEmail("");
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
    <section className="how-does-it-work">
      <div className="frame-303">
        <div className="frame-265">
          <div className="frame-34">
            <h2 className="rejoignez-l-aventure">Rejoignez l'aventure !</h2>
            <p className="inscrivez-vous-la-newletter-pour-tre-au-courant-des-derni-res-actualit-s-de-flambow">
              Inscrivez-vous à la Newletter pour être au courant des dernières actualités de Flambow !
            </p>
          </div>

          <div className="frame-312">
            <input
              type="email"
              placeholder="Votre adresse mail"
              aria-label="Votre adresse mail"
              value={email}
              onChange={handleInputChange}
              disabled={isLoading}
              style={{
                flex: 1,
                border: "none",
                padding: "12px 24px",
                borderRadius: "50px",
                fontSize: "16px",
              }}
            />
            <button
              className="iconamoon-send-fill"
              type="button"
              aria-label="Envoyer"
              onClick={submitEmail}
              disabled={isLoading}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {isLoading ? (
                <div style={{ width: "24px", height: "24px" }}>
                  <span className="visually-hidden">Chargement...</span>
                </div>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 38 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.0874963 7.40215C-0.45417 2.53965 4.55208 -1.03118 8.975 1.06465L33.8583 12.8521C38.625 15.1084 38.625 21.8917 33.8583 24.148L8.975 35.9376C4.55208 38.0334 -0.452087 34.4626 0.0874963 29.6001L1.0875 20.5834H18C18.5525 20.5834 19.0824 20.3639 19.4731 19.9732C19.8638 19.5825 20.0833 19.0526 20.0833 18.5001C20.0833 17.9475 19.8638 17.4176 19.4731 17.0269C19.0824 16.6362 18.5525 16.4167 18 16.4167H1.08958L0.0874963 7.40215Z"
                    fill="#787fdc"
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
