function Slideshow() {
  return (
    <div 
      id="carouselExample" 
      className="carousel slide m-0 p-0" 
      data-bs-ride="carousel"   // enables auto-sliding
      data-bs-interval="3000"   // 3 seconds per slide
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img 
            src="/images/PnC_Bagong_Cabuyao_Hall.png" 
            className="d-block w-100" 
            alt="PNC Campus" 
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img 
            src="/images/PnC_Students.jpg" 
            className="d-block w-100" 
            alt="Students" 
            style={{ maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Optional Controls (Prev/Next buttons) */}
      <button 
        className="carousel-control-prev" 
        type="button" 
        data-bs-target="#carouselExample" 
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button 
        className="carousel-control-next" 
        type="button" 
        data-bs-target="#carouselExample" 
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slideshow;
