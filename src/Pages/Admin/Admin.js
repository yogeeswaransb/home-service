import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import './Admin.css'
import Bookings from '../Bookings/Bookings'

export default function Admin() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('users')
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (activeTab === 'users') {
      axios.get('http://localhost:7071/user/getall')
        .then(response => setUsers(response.data))
        .catch(error => {
          toast.error("Failed to fetch users")
        })
    }
  }, [activeTab])

  const logout = () => {
    toast.error("Logging Off")
    alert("Logging off")
    navigate("/")
  }

  return (
    <div className="admin-dashboard container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Dashboard</h2>
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      </div>
      <div className="row">
        <div className="col-md-3">
          <ul className="list-group">
            <li 
              className={`list-group-item ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
              style={{ cursor: 'pointer' }}
            >
              Manage Users
            </li>
            <li 
              className={`list-group-item ${activeTab === 'bookings' ? 'active' : ''}`}
              onClick={() => setActiveTab('bookings')}
              style={{ cursor: 'pointer' }}
            >
              Manage Bookings
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          {activeTab === 'users' && (
            <div>
              <h3>Users</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map(user => (
                      <tr key={user.userId}>
                        <td>{user.userId}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNo}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No users found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'bookings' && (
            <div>
              <h3>Bookings</h3>
              <p>Booking management functionality goes here.</p>
              <Bookings/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
