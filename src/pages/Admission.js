function Admission() {
  return (
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
  );
}

export default Admission;
