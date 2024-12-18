import "@style/Intro.css";

function Intro() {
  return (
    <section className="bg-landing py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <div className="text-end mt-5">
              <h2 className="fw-bold title dark-blue pb-4">Bienvenue sur Flambow !</h2>
              <p className="lead title-secondary pb-5">La solution pour connecter les générations</p>
              <button className="btn button-flambow mb-5 py-3 px-5">Découvrez le prototype</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
