import React from 'react';
import NavBar from "./Components/NavBar.js";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">MediKeep</div>
          <ul className="nav-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MediKeep</h1>
          <p>Your Trusted Partner in Healthcare Data Management</p>
          <button className="cta-button">Get Started</button>
        </div>
        <img src="medical-image.jpg" alt="Medical" className="hero-image" />
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        {/* Add more content about your company */}
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-card">
          <div className="service-icon">Icon</div>
          <h3>Efficient Record Keeping</h3>
          <p>Streamline your patient data management.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">Icon</div>
          <h3>Report Generation</h3>
          <p>Create and manage patient reports with ease.</p>
        </div>
        {/* Add more service cards */}
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Reach out to us.</p>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="cta-button">Send Message</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2023 MediKeep. All rights reserved.</p>
      </footer>
    </div>
    {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div class="container my-5">

  <footer class="bg-dark text-center text-white">
  {/* <!-- Grid container --> */}
  <div class="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section class="">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Register for free</span>
          <button type="button" class="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
  
</div>
{/* <!-- End of .container --> */}
    </>
  )
}

export default HomePage
