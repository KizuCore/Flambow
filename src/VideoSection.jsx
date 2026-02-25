function VideoSection() {
  return (
    <section>
      <div className="video-container">
        <div className="video-text">
            <h1 >Vidéo de démonstration</h1>
            <p>
              Découvrez la première vidéo de démonstration de notre application !
            </p>
        </div>
        <iframe className="video-placeholder" src="https://www.youtube.com/embed/QvAgbVC6sNM?si=VmI9UPI0AEsOVc_l" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </section>
  );
}

export default VideoSection;
