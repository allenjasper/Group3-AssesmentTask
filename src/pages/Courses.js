function Courses() {
  const programs = [
    { code: "BSIT", name: "Bachelor of Science in Information Technology" },
    { code: "BSEd", name: "Bachelor of Secondary Education" },
    { code: "BSBA", name: "Bachelor of Science in Business Administration" }
  ];

  return (
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
  );
}

export default Courses;
