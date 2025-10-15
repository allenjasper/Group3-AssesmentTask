import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message! We will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1000);
  };

  return (
    // reduce bottom padding so CTA sits closer to footer
    <div className="container pt-5 pb-3">
      <h1 className="fw-bold text-center text-success mb-2">Contact Us</h1>
      <p className="text-center lead mb-5">
        Get in touch with us for any inquiries, questions, or assistance
      </p>

      {/* Make row stretch columns to equal height */}
      <div className="row align-items-stretch">
        {/* Contact Information */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">Contact Information</h4>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-2">
                  <i className="fas fa-map-marker-alt text-success fs-4"></i>
                </div>
                <div className="col-10">
                  <h6 className="text-success">Address</h6>
                  <p className="mb-0">
                    Katapatan Subdivision, Brgy. Banay-banay,<br />
                    City of Cabuyao, Laguna 4025<br />
                    Philippines
                  </p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-2">
                  <i className="fas fa-phone text-success fs-4"></i>
                </div>
                <div className="col-10">
                  <h6 className="text-success">Phone Numbers</h6>
                  <p className="mb-0">
                    Main Office: (049) 834-2380<br />
                    Registrar: (049) 834-2381<br />
                    Admissions: (049) 834-2382
                  </p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-2">
                  <i className="fas fa-envelope text-success fs-4"></i>
                </div>
                <div className="col-10">
                  <h6 className="text-success">Email Addresses</h6>
                  <p className="mb-0">
                    General: info@pnc.edu.ph<br />
                    Admissions: admissions@pnc.edu.ph<br />
                    Registrar: registrar@pnc.edu.ph
                  </p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-2">
                  <i className="fas fa-clock text-success fs-4"></i>
                </div>
                <div className="col-10">
                  <h6 className="text-success">Office Hours</h6>
                  <p className="mb-0">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 8:00 AM - 12:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="row">
                <div className="col-12">
                  <h6 className="text-success">Follow Us</h6>
                  <div className="d-flex gap-3">
                    <a href="#" className="btn btn-outline-success btn-sm">
                      <i className="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="#" className="btn btn-outline-success btn-sm">
                      <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="#" className="btn btn-outline-success btn-sm">
                      <i className="fab fa-instagram"></i> Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">Send us a Message</h4>
            </div>
            <div className="card-body">
              {submitMessage && (
                <div className="alert alert-success" role="alert">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`form-select ${errors.subject ? 'is-invalid' : ''}`}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Admission Information">Admission Information</option>
                    <option value="Academic Programs">Academic Programs</option>
                    <option value="Student Services">Student Services</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    rows="5"
                    placeholder="Please provide details about your inquiry..."
                  />
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-success w-100"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">Find Us on the Map</h4>
            </div>
            <div className="card-body p-0">
              <div className="ratio ratio-21x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.826!2d121.1338387!3d14.2592295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d88258da3383:0x3db6c2402700f58f!2sPamantasan%20ng%20Cabuyao!5e0!3m2!1sen!2sph!4v1635123456789"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PNC Location Map"
                ></iframe>
              </div>
            </div>
            <div className="card-footer text-muted">
              <small>
                <i className="fas fa-info-circle me-1"></i>
                Click and drag to navigate the map. Use the controls to zoom in/out.
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="row mt-3 mb-0">
        <div className="col-md-4 mb-3">
          <div className="card text-center border-success">
            <div className="card-body">
              <i className="fas fa-graduation-cap text-success fs-1 mb-3"></i>
              <h5 className="text-success">Admissions Office</h5>
              <p className="text-muted">For enrollment and admission inquiries</p>
              <a href="mailto:admissions@pnc.edu.ph" className="btn btn-outline-success">
                Contact Admissions
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center border-success">
            <div className="card-body">
              <i className="fas fa-file-alt text-success fs-1 mb-3"></i>
              <h5 className="text-success">Registrar's Office</h5>
              <p className="text-muted">For academic records and transcripts</p>
              <a href="mailto:registrar@pnc.edu.ph" className="btn btn-outline-success">
                Contact Registrar
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-center border-success">
            <div className="card-body">
              <i className="fas fa-users text-success fs-1 mb-3"></i>
              <h5 className="text-success">Student Services</h5>
              <p className="text-muted">For student support and services</p>
              <a href="mailto:studentservices@pnc.edu.ph" className="btn btn-outline-success">
                Contact Student Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
