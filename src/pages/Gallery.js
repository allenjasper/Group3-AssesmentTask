import React, { useState } from "react";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample gallery data - in a real app, these would be actual images
  const galleryItems = [
    {
      id: 1,
      title: "PNC Main Campus",
      category: "campus",
      image: "/pnc-header.png", // Using existing image
      description: "Beautiful view of the main campus building"
    },
    {
      id: 2,
      title: "Graduation Ceremony 2024",
      category: "events",
      image: "/pnc-logo.png", // Using existing image as placeholder
      description: "Annual graduation ceremony celebrating our graduates"
    },
    {
      id: 3,
      title: "Computer Laboratory",
      category: "academics",
      image: "/pnc-header.png",
      description: "State-of-the-art computer laboratory for IT students"
    },
    {
      id: 4,
      title: "Student Activities",
      category: "campus",
      image: "/pnc-logo.png",
      description: "Students participating in various campus activities"
    },
    {
      id: 5,
      title: "Recognition Day",
      category: "events",
      image: "/pnc-header.png",
      description: "Academic excellence recognition ceremony"
    },
    {
      id: 6,
      title: "Library Facilities",
      category: "academics",
      image: "/pnc-logo.png",
      description: "Modern library with extensive collection of books"
    },
    {
      id: 7,
      title: "Sports Festival",
      category: "events",
      image: "/pnc-header.png",
      description: "Annual sports festival and competitions"
    },
    {
      id: 8,
      title: "Community Outreach",
      category: "outreach",
      image: "/pnc-logo.png",
      description: "Students and faculty engaging in community service"
    },
    {
      id: 9,
      title: "Science Laboratory",
      category: "academics",
      image: "/pnc-header.png",
      description: "Well-equipped science laboratory for research"
    },
    {
      id: 10,
      title: "Campus Garden",
      category: "campus",
      image: "/pnc-logo.png",
      description: "Beautiful landscaped gardens around the campus"
    },
    {
      id: 11,
      title: "Medical Mission",
      category: "outreach",
      image: "/pnc-header.png",
      description: "Free medical mission for the local community"
    },
    {
      id: 12,
      title: "Cultural Night",
      category: "events",
      image: "/pnc-logo.png",
      description: "Annual cultural night showcasing student talents"
    }
  ];

  const categories = [
    { key: "all", label: "All Photos", count: galleryItems.length },
    { key: "campus", label: "Campus Life", count: galleryItems.filter(item => item.category === "campus").length },
    { key: "events", label: "Events", count: galleryItems.filter(item => item.category === "events").length },
    { key: "academics", label: "Academics", count: galleryItems.filter(item => item.category === "academics").length },
    { key: "outreach", label: "Outreach Programs", count: galleryItems.filter(item => item.category === "outreach").length }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container py-5">
      <h1 className="fw-bold text-center text-success mb-2">Gallery</h1>
      <p className="text-center lead mb-5">
        Explore our vibrant campus life, memorable events, and academic excellence through these photos
      </p>

      {/* Filter Categories */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-10">
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map(category => (
              <button
                key={category.key}
                className={`btn ${selectedCategory === category.key ? 'btn-success' : 'btn-outline-success'} mb-2`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="row">
        {filteredItems.map(item => (
          <div key={item.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div 
                className="position-relative overflow-hidden"
                style={{ height: "250px", cursor: "pointer" }}
                onClick={() => openModal(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top h-100 w-100"
                  style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                  onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
                  onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                />
                <div className="position-absolute top-0 end-0 m-2">
                  <span className={`badge ${getCategoryBadgeColor(item.category)}`}>
                    {getCategoryLabel(item.category)}
                  </span>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title text-success">{item.title}</h5>
                <p className="card-text text-muted">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-5">
          <h4 className="text-muted">No photos found in this category</h4>
        </div>
      )}

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div 
          className="modal fade show d-block" 
          style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          onClick={closeModal}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="modal-title text-success">{selectedImage.title}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body p-0">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-100"
                  style={{ maxHeight: "70vh", objectFit: "contain" }}
                />
              </div>
              <div className="modal-footer">
                <p className="mb-0 text-muted">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistics Section */}
      <div className="row mt-5">
        <div className="col-md-8 mx-auto">
          <div className="card bg-light p-4">
            <h3 className="text-success text-center mb-4">Photo Gallery Statistics</h3>
            <div className="row text-center">
              {categories.slice(1).map(category => (
                <div key={category.key} className="col-md-3 mb-3">
                  <div className="card border-success">
                    <div className="card-body">
                      <h4 className="text-success">{category.count}</h4>
                      <small className="text-muted">{category.label}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper functions
function getCategoryBadgeColor(category) {
  const colors = {
    campus: "bg-primary",
    events: "bg-warning",
    academics: "bg-info",
    outreach: "bg-secondary"
  };
  return colors[category] || "bg-secondary";
}

function getCategoryLabel(category) {
  const labels = {
    campus: "Campus",
    events: "Events", 
    academics: "Academic",
    outreach: "Outreach"
  };
  return labels[category] || category;
}

export default Gallery;
