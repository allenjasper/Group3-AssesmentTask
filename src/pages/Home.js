import Slideshow from "../components/Slideshow";

function Home() {
    const programs = [
    { code: "BSIT", name: "Bachelor of Science in Information Technology" },
    { code: "BSEd", name: "Bachelor of Secondary Education" },
    { code: "BSIT", name: "Bachelor of Science in Information Technology" },
    { code: "BSEd", name: "Bachelor of Secondary Education" },
    { code: "BSIT", name: "Bachelor of Science in Information Technology" },
    { code: "BSEd", name: "Bachelor of Secondary Education" },
    
    { code: "BSBA", name: "Bachelor of Science in Business Administration" }
  ];

  return (

    
    <div>
      {/* Slideshow Section */}
      <section id="home">
        <Slideshow />
       
        <h1 className="fw-bold">Welcome to Pamantasan ng Cabuyao</h1>
        <p className="lead">A premier institution of higher learning in Region IV</p>
     
  {/* Vision & Mission Section */}
  <div className="container mt-5">
    <div className="row text-center">
      <div className="col-md-6">
        <h2 className="text-success">Vision</h2>
        <p>
          A premier institution of higher learning in Region IV, developing globally-competitive
          and value-laden professionals and leaders instrumental to community development and nation-building.
        </p>
      </div>
      <div className="col-md-6">
        <h2 className="text-success">Mission</h2>
        <p>
          UC (PnC) is committed to equip individuals with knowledge, skills, and values
          that will enable them to achieve their professional goals & provide leadership
          and service for national development.
        </p>
      </div>
    </div>
  </div>

  {/* Core Values */}
  <div className="container mt-5">
    <h2 className="text-center text-success">Core Values</h2>
    <p className="text-center mt-3">
      As a God-fearing institution respecting multi-faith of people, PnC adheres to the following core values
    </p>
    <div className="row justify-content-center mt-4">
      <div className="col-md-3">
        <div className="card shadow-sm p-3 text-center">• Personal Dignity</div>
      </div>
      <div className="col-md-3">
        <div className="card shadow-sm p-3 text-center">• Nurturing Community</div>
      </div>
      <div className="col-md-3">
        <div className="card shadow-sm p-3 text-center">• Commitment to Excellence</div>
      </div>
    </div>
  </div>
      </section>

      {/* About Section */}
<section id="about" className="container py-5">
  <h2 className="text-center text-success">About Us</h2>
  <p>
    Pamantasan ng Cabuyao was established to provide quality higher education to the people of Cabuyao and nearby areas.
  </p>

  <h3>Administrative Officers</h3>
  <ul>
    <li>University President: Dr. ______</li>
    <li>Vice President: ______</li>
    <li>Dean of College of Computing Studies: ______</li>
  </ul>

</section>


      {/* Courses Section */}
      <section id="courses" className="container py-5 bg-light">
        
    <div className="container mt-5">
      <h1 className="fw-bold text-center text-success mb-4">Programs Offered</h1>
      <div className="row">
        {programs.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm p-4 text-center">
              <h3 className="text-success">{course.code}</h3>
              <p>{course.name}</p>
              <button className="btn btn-outline-success">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>

      {/* Admission Section */}
      <section id="admission" className="container py-5">
        <div className="container mt-5">
      <h1 className="fw-bold text-success text-center mb-4">Admission</h1>
      
      <div className="row">
        <div className="col-md-6">
          <h4>Requirements</h4>
          <ul>
            <li>High School Report Card (Form 138)</li>
            <li>Birth Certificate (PSA)</li>
            <li>Good Moral Certificate</li>
          </ul>
        </div>
        
        <div className="col-md-6">
          <h4>Apply Now</h4>
          <form className="mt-3 shadow-sm p-4 rounded bg-light">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Juan Dela Cruz" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="example@email.com" />
            </div>
            <div className="mb-3">
              <label className="form-label">Preferred Course</label>
              <select className="form-select">
                <option>BSIT</option>
                <option>BSEd</option>
                <option>BSBA</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success w-100">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
      </section>
    </div>
  );
}

export default Home;
