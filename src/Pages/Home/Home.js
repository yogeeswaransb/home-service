import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center bg-primary text-white">
        <div className="p-5 container">
          <h1 className="display-4">Effortless Booking Services</h1>
          <p className="lead">We make cleaning and other home services easy and affordable.</p>
          <button
            className="btn btn-light btn-lg"
            onClick={() => navigate('/signin')}
          >
            Book Now
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="text-center col-12">
              <h2>Ready to Experience the Difference?</h2>
              <p>
                Our specialists are ready to help you transform your home with top-quality cleaning,
                pest control, moving services, and more.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => navigate('/signin')}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-2">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h5 className="my-0 font-weight-normal">Cleaning Services</h5>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Home Cleaning</h5>
                  <p className="card-text">
                    Enjoy a spotless and serene home environment.
                  </p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => navigate('/booking/home-cleaning')}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h5 className="my-0 font-weight-normal">Pest Control</h5>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Pest Control</h5>
                  <p className="card-text">
                    Safe and effective solutions to keep pests at bay.
                  </p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => navigate('/booking/pest-control')}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <div className="card-header">
                  <h5 className="my-0 font-weight-normal">Moving Services</h5>

                </div>
                <div className="card-body">
                  <h5 className="card-title">Moving Services</h5>
                  <p className="card-text">
                    Professional moving assistance tailored to your needs.
                  </p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => navigate('/booking/moving-services')}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
