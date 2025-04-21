import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import URL from '../URL/Url'
import '../Signin/Sign.css'
import './Furniture.css'

export default function Furniture() {
    const navigate = useNavigate()
    const [phoneNumber, setPhoneNumber] = useState('')
    const [rooms, setRooms] = useState('')
    const [bookingDate, setBookingDate] = useState('')
    const [address, setAddress] = useState('')

    const bookService = () => {
        const body = { phoneNumber, rooms, bookingDate, address }
        const url = `${URL}user/furniture/bookfurniture`
        axios.post(url, body).then((response) => {
            const result = response.data
            if (result.status === "success") {
                toast.success("Service booked successfully")
                navigate('/confirm')
            } else {
                toast.error(result.error)
            }
        })
    }

    return (
        <div className="container my-5">
            <div className="card">
                <div className="card-header text-center">
                    <h3>Home - Furniture</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={(e) => { e.preventDefault(); bookService(); }}>
                        <div className="form-floating mb-3">
                            <input 
                                type="tel" 
                                className="form-control" 
                                id="phoneNumber" 
                                placeholder="Phone Number"
                                maxLength="10"
                                minLength="10"
                                required 
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <label htmlFor="phoneNumber">Phone Number (excluding postal code)</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                                type="number" 
                                className="form-control" 
                                id="rooms" 
                                placeholder="Rooms" 
                                required 
                                value={rooms}
                                onChange={(e) => setRooms(e.target.value)}
                            />
                            <label htmlFor="rooms">Rooms</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                                type="date" 
                                className="form-control" 
                                id="bookingDate" 
                                placeholder="Date" 
                                required 
                                value={bookingDate}
                                onChange={(e) => setBookingDate(e.target.value)}
                            />
                            <label htmlFor="bookingDate">Date</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="address" 
                                placeholder="Address" 
                                required 
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                            >
                                Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
