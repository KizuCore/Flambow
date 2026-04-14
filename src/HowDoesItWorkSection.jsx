// Données des étapes affichées dans les cartes.
const steps = [
  {
    title: "Crée ton compte",
    description:
      "Un parcours ludique, adapté à vos besoins où vous pourrez renseigner vos ambitions.",
  },
  {
    title: "Trouve une annonce",
    description:
      "Trouve la personne qui saura t'apprendre une nouvelle compétence sur notre page d'annonces.",
  },
  {
    title: "Organise une rencontre",
    description:
      "Prends contact avec ton professeur et rencontre-le pour échanger.",
  },
];

function HowDoesItWorkSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center gap-16 px-6 py-8 2xl:px-[200px] 2xl:pb-32 2xl:pt-16">
      <div className="flex flex-col justify-center gap-6 text-center">
        <h1 className="text-[#787fdc]">Comment ça fonctionne ?</h1>
        <p>
          Jeunes ou seniors, vos compétences nous intéressent ! <br />
          Flambow met en relation des personnes de différents âges afin qu&apos;ils échangent leurs connaissances et
          leurs compétences dans des cours ludiques en petit comité.
        </p>
      </div>

      {/* Cartes d'étapes (1, 2, 3). */}
      <div className="relative flex w-full max-w-[1328px] flex-row items-stretch justify-between gap-6 max-[1200px]:flex-col max-[1200px]:gap-16">
        {steps.map((step, index) => (
          <div key={step.title} className="relative flex flex-1 flex-col">
            <div className="relative flex min-h-[200px] w-full flex-1 flex-col items-center justify-start gap-6 overflow-hidden rounded-[50px] bg-[#e5ebff] px-6 pb-12 pt-[68px] text-center">
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
            <div className="absolute left-1/2 top-[-40px] flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-[#787fdc]">
              <h1 className="text-white">{index + 1}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Message complémentaire pour les personnes qui veulent transmettre. */}
      <div className="flex w-full max-w-[1328px] flex-col items-start justify-center gap-6 rounded-[50px] bg-[#787fdc] p-16 max-[1200px]:px-6 max-[1200px]:py-16 max-[1200px]:text-center">
        <h1 className="text-white">Tu souhaites partager tes compétences ?</h1>
        <p className="text-white">
          Flambow t&apos;accompagne dans la création de ton annonce et dans toutes les étapes de réservation en
          proposant une interface personnalisée, un système de chat et un système de paiement sécurisé.
        </p>
      </div>
    </section>
  );
}

export default HowDoesItWorkSection;
