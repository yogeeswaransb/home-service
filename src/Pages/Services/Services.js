import React from 'react'
import { useNavigate } from 'react-router'
import './Services.css'

export default function Services() {
  const navigate = useNavigate()

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">What We Offer</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">House Cleaning</h5>
              <p className="card-text">Professional cleaning service for your home.</p>
              <a href="/cleaning" className="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Furniture Assembly</h5>
              <p className="card-text">Expert assembly service for your furniture.</p>
              <a href="/furniture" className="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Service 3</h5>
              <p className="card-text">Description of Service 3.</p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Service 4</h5>
              <p className="card-text">Description of Service 4.</p>
              <button className="btn btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
