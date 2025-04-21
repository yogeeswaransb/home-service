import React from 'react'
import { useNavigate } from 'react-router'
import './About.css'

export default function About() {
  const navigate = useNavigate()

  // Check login status if needed
  const loginstatus = sessionStorage.getItem("currentloginStatus")
  const checkLogin = () => {
    if (loginstatus !== '1') {
      const drop = document.getElementById('dropdown-basic')
      if (drop) drop.disabled = true
    }
  }

  return (
    <div style={{ overflowX: "hidden", padding: "20px" }}>
      <div className="about-container d-flex">
        
        {/* Left Navigation */}
        <div className="left-nav" style={{
          minWidth: "250px",
          marginRight: "20px",
          borderRight: "1px solid #ddd",
          paddingRight: "20px"
        }}>
          <h3>About</h3>
          <div className="list-group">
            <a href="#service-offerings" className="list-group-item list-group-item-action">Service Offerings</a>
            <a href="#home-cleaning" className="list-group-item list-group-item-action">Home Cleaning</a>
            <a href="#office-cleaning" className="list-group-item list-group-item-action">Office Cleaning</a>
            <a href="#carpet-cleaning" className="list-group-item list-group-item-action">Carpet &amp; Rug Cleaning</a>
            <a href="#window-cleaning" className="list-group-item list-group-item-action">Window Cleaning</a>
            <a href="#deep-cleaning" className="list-group-item list-group-item-action">Deep Cleaning</a>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="right-content flex-grow-1">
          <section id="service-offerings">
            <h2>Service Offerings</h2>
            <p>
              We provide a variety of services to cater to your cleaning needs. Each service is designed to guarantee the best result, ensuring your space is spotless and inviting.
            </p>
          </section>
          
          <section id="home-cleaning" style={{ marginTop: "40px" }}>
            <h2>Home Cleaning</h2>
            <p>
              Our home cleaning service covers every detail, from dusting and vacuuming to deep cleaning your kitchen and bathrooms. We use eco-friendly cleaning products to ensure a safe and healthy environment.
            </p>
          </section>
          
          <section id="office-cleaning" style={{ marginTop: "40px" }}>
            <h2>Office Cleaning</h2>
            <p>
              A clean office is essential for productivity. Our office cleaning service offers routine maintenance as well as deep cleaning solutions tailored to large workspaces, ensuring a professional and hygienic environment.
            </p>
          </section>
          
          <section id="carpet-cleaning" style={{ marginTop: "40px" }}>
            <h2>Carpet &amp; Rug Cleaning</h2>
            <p>
              Specialized carpet and rug cleaning services eliminate tough stains and allergens. Our advanced equipment and cleaning techniques ensure your carpets remain vibrant and prolong their longevity.
            </p>
          </section>
          
          <section id="window-cleaning" style={{ marginTop: "40px" }}>
            <h2>Window Cleaning</h2>
            <p>
              Enjoy crystal clear views with our window cleaning service. Whether for residential or commercial spaces, we use streak‐free solutions and techniques to enhance natural light.
            </p>
          </section>
          
          <section id="deep-cleaning" style={{ marginTop: "40px" }}>
            <h2>Deep Cleaning</h2>
            <p>
              Our deep cleaning service goes beyond the surface to remove dirt, grime, and hidden messes. Perfect for seasonal cleaning or special occasions, we ensure every corner is addressed.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
