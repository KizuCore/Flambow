import "@style/Intro.css";
import oldYoung from "@image/old-young.png";

function Intro() {
  return (
    <section className="bg-landing py-5 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <div className="text-end mt-5">
              <h2 className="fw-bold title dark-blue pb-4">Bienvenue sur Flambow !</h2>
              <p className="lead title-secondary pb-5">
                La solution pour connecter les générations
              </p>
              <button className="btn button-flambow mb-5 py-3 px-5">
                Découvrez le prototype
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={oldYoung} alt="Générations connectées" className="image-bottom-left" />
    </section>
  );
}

export default Intro;
