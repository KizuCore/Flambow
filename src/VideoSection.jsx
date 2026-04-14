function VideoSection() {
  return (
    <section className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center gap-16 px-6 py-8 2xl:px-[200px] 2xl:pb-32 2xl:pt-16">
      <div className="relative flex w-full flex-col items-center justify-start gap-16 rounded-[50px] bg-white p-16 backdrop-blur-[10px] max-[768px]:gap-8 max-[768px]:p-6">
        {/* Titre et texte d'introduction de la section vidéo. */}
        <div className="flex flex-col gap-3 text-center">
          <h1>Vidéo de démonstration</h1>
          <p>Découvrez la première vidéo de démonstration de notre application !</p>
        </div>

        {/* Intégration YouTube responsive. */}
        <iframe
          className="relative h-[529px] w-full max-w-[1050px] rounded-[50px] bg-[#d9d9d9] max-[768px]:h-[300px] max-[400px]:h-[200px]"
          src="https://www.youtube.com/embed/QvAgbVC6sNM?si=VmI9UPI0AEsOVc_l"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default VideoSection;
