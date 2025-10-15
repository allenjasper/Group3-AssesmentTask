import React from "react";
import { Link } from "react-router-dom";
import Slideshow from "../components/Slideshow";

function Home() {
  return (
    <div>
      {/* Hero Section with Slideshow */}
      <section className="mb-5">
        <Slideshow />
        <div className="text-center mt-4">
          <h1 className="fw-bold display-4">Welcome to Pamantasan ng Cabuyao</h1>
          <p className="lead fs-5">A premier institution of higher learning in Region IV</p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100 p-4">
              <h2 className="text-success mb-3">Vision</h2>
              <p className="lead">
                A premier institution of higher learning in Region IV, developing globally-competitive
                and value-laden professionals and leaders instrumental to community development and nation-building.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100 p-4">
              <h2 className="text-success mb-3">Mission</h2>
              <p className="lead">
                PnC is committed to equip individuals with knowledge, skills, and values
                that will enable them to achieve their professional goals & provide leadership
                and service for national development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center text-success mb-3">Core Values</h2>
          <p className="text-center mb-5 lead">
            As a God-fearing institution respecting multi-faith of people, PnC adheres to the following core values
          </p>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm p-4 text-center h-100">
                <i className="fas fa-user-shield text-success fs-1 mb-3"></i>
                <h5 className="text-success">Personal Dignity</h5>
                <p className="text-muted">Respecting the worth and value of every individual</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm p-4 text-center h-100">
                <i className="fas fa-hands-helping text-success fs-1 mb-3"></i>
                <h5 className="text-success">Nurturing Community</h5>
                <p className="text-muted">Building supportive and caring relationships</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card shadow-sm p-4 text-center h-100">
                <i className="fas fa-trophy text-success fs-1 mb-3"></i>
                <h5 className="text-success">Commitment to Excellence</h5>
                <p className="text-muted">Striving for the highest standards in all endeavors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container py-5">
        <h2 className="text-center text-success mb-5">Explore PNC</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card text-center shadow-sm h-100">
              <div className="card-body">
                <i className="fas fa-info-circle text-success fs-1 mb-3"></i>
                <h5 className="text-success">About Us</h5>
                <p className="text-muted">Learn about our history and leadership</p>
                <Link to="/about" className="btn btn-outline-success">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-center shadow-sm h-100">
              <div className="card-body">
                <i className="fas fa-graduation-cap text-success fs-1 mb-3"></i>
                <h5 className="text-success">Programs</h5>
                <p className="text-muted">Discover our academic programs</p>
                <Link to="/courses" className="btn btn-outline-success">View Courses</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-center shadow-sm h-100">
              <div className="card-body">
                <i className="fas fa-file-alt text-success fs-1 mb-3"></i>
                <h5 className="text-success">Admissions</h5>
                <p className="text-muted">Start your journey with us</p>
                <Link to="/admission" className="btn btn-outline-success">Apply Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card text-center shadow-sm h-100">
              <div className="card-body">
                <i className="fas fa-images text-success fs-1 mb-3"></i>
                <h5 className="text-success">Gallery</h5>
                <p className="text-muted">View our campus and events</p>
                <Link to="/gallery" className="btn btn-outline-success">View Gallery</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-success text-white py-5">
        <div className="container text-center">
          <h2 className="mb-3">Ready to Start Your Journey?</h2>
          <p className="lead mb-4">Join thousands of successful graduates who started their careers at PNC</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/admission" className="btn btn-light btn-lg">
              Apply for Admission
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
