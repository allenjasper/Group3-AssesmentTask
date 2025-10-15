import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";


function Admission() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    course: "BSIT",
    studentType: "freshman",
    birthDate: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  const programs = [
    "BSIT - Bachelor of Science in Information Technology",
    "BSEd - Bachelor of Secondary Education",
    "BSBA - Bachelor of Science in Business Administration",
    "BSCS - Bachelor of Science in Computer Science",
    "BEED - Bachelor of Elementary Education",
    "BSAC - Bachelor of Science in Accountancy",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.birthDate) newErrors.birthDate = "Birth date is required";
    if (!formData.gender) newErrors.gender = "Gender is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const doc = new jsPDF();
    doc.addImage("/pnc-logo.png", "PNG", 15, 10, 25, 25);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text("Pamantasan ng Cabuyao", 50, 20);
    doc.setFontSize(14);
    doc.text("Admission Application Form", 50, 30);
    doc.line(15, 35, 195, 35);
    doc.setFont("helvetica", "normal");

    doc.text(`Full Name: ${formData.fullName}`, 20, 60);
    doc.text(`Email: ${formData.email}`, 20, 70);
    doc.text(`Phone: ${formData.phone}`, 20, 80);
    doc.text(`Address: ${formData.address}`, 20, 90);
    doc.text(`Birth Date: ${formData.birthDate}`, 20, 100);
    doc.text(`Gender: ${formData.gender}`, 20, 110);
    doc.text(`Preferred Course: ${formData.course}`, 20, 130);
    doc.text(`Student Type: ${formData.studentType}`, 20, 140);
    doc.save(`${formData.fullName.replace(/\s+/g, "_")}_admission_form.pdf`);

    alert("Application submitted successfully! Your admission form has been downloaded.");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center text-success mb-5 animate__animated animate__fadeInDown">
        Admission Portal
      </h1>
      <p className="text-center text-muted mb-5 fs-5">
        Begin your journey at <span className="fw-semibold text-success">Pamantasan ng Cabuyao</span>.  
        Fill out the form to apply for your preferred course.
      </p>

      <div className="row g-4">
        {/* Requirements */}
        <div className="col-lg-4 animate__animated animate__fadeInLeft">
          <div className="card border-0 shadow-lg rounded-4 h-100">
            <div className="card-header bg-success text-white fw-bold fs-5 text-center rounded-top-4">
              Admission Requirements
            </div>
            <div className="card-body p-4">
              <h6 className="text-success fw-semibold">For Freshmen:</h6>
              <ul className="small">
                <li>High School Report Card (Form 138)</li>
                <li>Birth Certificate (PSA)</li>
                <li>Good Moral Certificate</li>
                <li>Medical Certificate</li>
                <li>2x2 ID Pictures (4 pieces)</li>
              </ul>
              <hr />
              <h6 className="text-success fw-semibold">For Transferees:</h6>
              <ul className="small">
                <li>Certificate of Transfer Credential</li>
                <li>Official Transcript of Records</li>
                <li>Certificate of Good Moral Character</li>
                <li>Birth Certificate (PSA)</li>
                <li>2x2 ID Pictures (4 pieces)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="col-lg-4 animate__animated animate__fadeInUp">
          <div className="card border-0 shadow-lg rounded-4 h-100">
            <div className="card-header bg-success text-white fw-bold fs-5 text-center rounded-top-4">
              Application Process
            </div>
            <div className="card-body p-4">
              <ol className="small">
                <li>Fill out the online application form</li>
                <li>Submit required documents</li>
                <li>Take the entrance examination</li>
                <li>Attend the interview (if required)</li>
                <li>Wait for admission results</li>
                <li>Complete enrollment process</li>
              </ol>
              <div className="alert alert-success shadow-sm mt-3 small">
                <i className="bi bi-info-circle-fill me-2"></i>
                Application period is from <b>March to July</b> for the next school year.
              </div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="col-lg-4 animate__animated animate__fadeInRight">
          <div className="card border-0 shadow-lg rounded-4 h-100">
            <div className="card-header bg-success text-white fw-bold fs-5 text-center rounded-top-4">
              Apply Now
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                {[
                  { label: "Full Name *", name: "fullName", type: "text", placeholder: "Juan Dela Cruz" },
                  { label: "Email *", name: "email", type: "email", placeholder: "example@email.com" },
                  { label: "Phone Number *", name: "phone", type: "tel", placeholder: "09123456789" },
                ].map((field, i) => (
                  <div className="mb-3" key={i}>
                    <label className="form-label fw-semibold text-success">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className={`form-control rounded-3 shadow-sm ${errors[field.name] ? "is-invalid" : ""}`}
                    />
                    {errors[field.name] && <div className="invalid-feedback">{errors[field.name]}</div>}
                  </div>
                ))}

                <div className="mb-3">
                  <label className="form-label fw-semibold text-success">Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="2"
                    placeholder="Complete Address"
                    className={`form-control rounded-3 shadow-sm ${errors.address ? "is-invalid" : ""}`}
                  />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold text-success">Birth Date *</label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className={`form-control rounded-3 shadow-sm ${errors.birthDate ? "is-invalid" : ""}`}
                    />
                    {errors.birthDate && <div className="invalid-feedback">{errors.birthDate}</div>}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold text-success">Gender *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={`form-select rounded-3 shadow-sm ${errors.gender ? "is-invalid" : ""}`}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold text-success">Preferred Course</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="form-select rounded-3 shadow-sm"
                  >
                    {programs.map((program, i) => (
                      <option key={i} value={program.split(" - ")[0]}>
                        {program}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold text-success">Student Type</label>
                  <select
                    name="studentType"
                    value={formData.studentType}
                    onChange={handleChange}
                    className="form-select rounded-3 shadow-sm"
                  >
                    <option value="freshman">Freshman</option>
                    <option value="transferee">Transferee</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 py-2 fw-bold shadow-sm rounded-4"
                  style={{ transition: "0.3s" }}
                  onMouseEnter={(e) => (e.target.style.boxShadow = "0 0 10px rgba(0,255,100,0.6)")}
                  onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
                >
                  Submit Application & Download PDF
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admission;
