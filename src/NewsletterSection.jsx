import axios from "axios";
import { useState } from "react";

function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Validation simple du format email.
  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  // Ajoute l'email dans le JSON distant: lecture de la liste puis mise à jour.
  const submitEmail = async () => {
    if (!email || !isValidEmail(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    setIsLoading(true);

    try {
      const getResponse = await axios.get(import.meta.env.VITE_JSONBIN_URL, {
        headers: {
          "X-Master-Key": "$2a$10$Zu66Zb596EucIxusOyr2g./I7qeHJAJY7ByzT3hNEWnrNQqW.2HV2",
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
            "X-Master-Key": "$2a$10$Zu66Zb596EucIxusOyr2g./I7qeHJAJY7ByzT3hNEWnrNQqW.2HV2",
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
    <section className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center gap-16 px-6 py-8 2xl:px-[200px] 2xl:pb-32 2xl:pt-16 max-[450px]:px-0 max-[450px]:py-0">
      <div className="flex w-full flex-col items-center gap-16 rounded-[50px] bg-[#787fdc] p-16 max-[768px]:p-8 max-[450px]:rounded-none max-[450px]:px-6 max-[450px]:py-16">
        <div className="w-full max-w-[900px]">
          <h1 className="text-center text-white">Rejoignez l&apos;aventure !</h1>
          <p className="mt-6 text-center text-white">
            Inscrivez-vous à la newsletter pour être au courant des dernières actualités de Flambow !
          </p>

          <div className="mt-8 flex w-full overflow-hidden rounded-[50px] max-[450px]:flex-col max-[450px]:gap-3 max-[450px]:overflow-visible max-[450px]:rounded-xl">
            <input
              type="email"
              placeholder="Votre adresse mail"
              aria-label="Votre adresse mail"
              value={email}
              onChange={handleInputChange}
              disabled={isLoading}
              className="w-full flex-1 bg-white px-6 py-3 font-sofia text-[18px] text-[#1b1725] outline-none placeholder:text-[#787fdc] disabled:cursor-not-allowed disabled:opacity-70 max-[450px]:rounded-xl max-[450px]:text-center"
            />

            <button
              type="button"
              aria-label="Envoyer"
              onClick={submitEmail}
              disabled={isLoading}
              className="flex shrink-0 items-center justify-center bg-white px-5 transition-colors duration-300 hover:bg-[#a9a3f5] disabled:cursor-not-allowed disabled:opacity-80 max-[450px]:w-full max-[450px]:rounded-xl max-[450px]:px-3 max-[450px]:py-3"
            >
              {/* Spinner pendant la requête, sinon icône flèche. */}
              {isLoading ? (
                <>
                  <span
                    className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-[#787fdc] border-t-transparent"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Chargement...</span>
                </>
              ) : (
                <svg
                  className="h-[30px] w-[50px] text-[#787fdc]"
                  viewBox="0 0 38 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.0874963 7.40215C-0.45417 2.53965 4.55208 -1.03118 8.975 1.06465L33.8583 12.8521C38.625 15.1084 38.625 21.8917 33.8583 24.148L8.975 35.9376C4.55208 38.0334 -0.452087 34.4626 0.0874963 29.6001L1.0875 20.5834H18C18.5525 20.5834 19.0824 20.3639 19.4731 19.9732C19.8638 19.5825 20.0833 19.0526 20.0833 18.5001C20.0833 17.9475 19.8638 17.4176 19.4731 17.0269C19.0824 16.6362 18.5525 16.4167 18 16.4167H1.08958L0.0874963 7.40215Z"
                    fill="currentColor"
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
