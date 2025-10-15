import React from "react";

function Courses() {
  const programs = [
    { 
      code: "BSIT", 
      name: "Bachelor of Science in Information Technology",
      description: "Focuses on the application of technology in solving business problems. Students learn programming, database management, network administration, and system analysis.",
      duration: "4 years",
      units: "120 units"
    },
    { 
      code: "BSEd", 
      name: "Bachelor of Secondary Education",
      description: "Prepares students to become professional secondary school teachers. Specializations include Mathematics, English, Science, and Social Studies.",
      duration: "4 years",
      units: "124 units"
    },
    { 
      code: "BSBA", 
      name: "Bachelor of Science in Business Administration",
      description: "Provides comprehensive business education covering management, marketing, finance, and entrepreneurship to develop future business leaders.",
      duration: "4 years",
      units: "120 units"
    },
    { 
      code: "BSCS", 
      name: "Bachelor of Science in Computer Science",
      description: "Focuses on computational theory, software development, and computer systems. Prepares students for careers in software engineering and research.",
      duration: "4 years",
      units: "120 units"
    },
    { 
      code: "BEED", 
      name: "Bachelor of Elementary Education",
      description: "Prepares students to become elementary school teachers with strong foundation in child development and pedagogy.",
      duration: "4 years",
      units: "124 units"
    },
    { 
      code: "BSAC", 
      name: "Bachelor of Science in Accountancy",
      description: "Provides comprehensive training in accounting principles, auditing, taxation, and financial management for future CPAs.",
      duration: "4 years",
      units: "120 units"
    }
  ];

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center text-success mb-4">Programs Offered</h1>
      <p className="text-center lead mb-5">
        Discover our comprehensive range of undergraduate programs designed to prepare you for success in your chosen career.
      </p>
      
      <div className="row">
        {programs.map((course, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-header bg-success text-white text-center">
                <h3 className="mb-0">{course.code}</h3>
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-success">{course.name}</h5>
                <p className="card-text flex-grow-1">{course.description}</p>
                
                <div className="mt-auto">
                  <div className="row text-center">
                    <div className="col-6">
                      <small className="text-muted">Duration</small>
                      <div className="fw-bold">{course.duration}</div>
                    </div>
                    <div className="col-6">
                      <small className="text-muted">Total Units</small>
                      <div className="fw-bold">{course.units}</div>
                    </div>
                  </div>
                  <button className="btn btn-outline-success w-100 mt-3">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-md-8 mx-auto">
          <div className="card bg-light p-4">
            <h3 className="text-success text-center">Admission Requirements</h3>
            <div className="row mt-3">
              <div className="col-md-6">
                <h5>For Freshmen:</h5>
                <ul>
                  <li>High School Report Card (Form 138)</li>
                  <li>Birth Certificate (PSA)</li>
                  <li>Good Moral Certificate</li>
                  <li>Medical Certificate</li>
                  <li>2x2 ID Pictures (4 pieces)</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>For Transferees:</h5>
                <ul>
                  <li>Certificate of Transfer Credential</li>
                  <li>Official Transcript of Records</li>
                  <li>Certificate of Good Moral Character</li>
                  <li>Birth Certificate (PSA)</li>
                  <li>2x2 ID Pictures (4 pieces)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
