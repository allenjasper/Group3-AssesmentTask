import React from "react";

function About() {
  return (
    <div className="container py-5">
      <h2 className="text-center text-success mb-4">About Us</h2>
      
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card shadow-sm p-4">
            <h3 className="text-success">Brief History</h3>
            <p className="mb-4">
              Pamantasan ng Cabuyao was established to provide quality higher education to the people of Cabuyao and nearby areas. 
              Founded with the vision of becoming a premier institution of higher learning in Region IV, PnC has been committed to 
              developing globally-competitive and value-laden professionals and leaders instrumental to community development and nation-building.
            </p>
            
            <p>
              Since its inception, the university has grown to become a respected institution known for its commitment to academic excellence, 
              research, and community service. The university continues to evolve and adapt to meet the changing needs of society while 
              maintaining its core values and mission.
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-10 mx-auto">
          <h3 className="text-success text-center mb-4">Administrative Officers</h3>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card text-center p-3">
                <div className="card-body">
                  <h5 className="card-title text-success">University President</h5>
                  <p className="card-text">Dr. [President Name]</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card text-center p-3">
                <div className="card-body">
                  <h5 className="card-title text-success">Vice President</h5>
                  <p className="card-text">[VP Name]</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card text-center p-3">
                <div className="card-body">
                  <h5 className="card-title text-success">Dean of Computing Studies</h5>
                  <p className="card-text">[Dean Name]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-8 mx-auto">
          <div className="card shadow-sm p-4 bg-light">
            <h3 className="text-success text-center">Faculty Excellence</h3>
            <p className="text-center">
              Our faculty members are highly qualified professionals with advanced degrees and extensive experience 
              in their respective fields. They are committed to providing quality education and mentoring students 
              to achieve their academic and professional goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
