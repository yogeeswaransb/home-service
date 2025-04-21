import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import URL from '../URL/Url'
import './Cleaning.css'

export default function Cleaning() {
    const navigate = useNavigate()
    const [phoneno, setPhoneno] = useState('')
    const [rooms, setRooms] = useState('')
    const [date, setDate] = useState('')
    const [address, setAddress] = useState('')

    const SignUp = (e) => {
        e.preventDefault()
        const userId = sessionStorage.getItem("userId") // Ensure this is set at login

        const body = {
            phoneno,
            rooms,
            date,
            address,
            user: { userId: parseInt(userId) }
        }

        const url = `${URL}user/cleaning/bookcleaning`
        axios.post(url, body)
            .then(response => {
                const result = response.data
                if (result.status === undefined) {
                    toast.success("Booking Successfully")
                    navigate('/home')
                } else {
                    toast.error(result.error)
                }
            })
            .catch(err => {
                toast.error("Something went wrong")
                console.error(err)
            })
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Home - Cleaning</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={SignUp}>
                                <div className="form-floating mb-3">
                                    <input
                                        type="tel"
                                        className="form-control  "
                                        maxLength="10"
                                        minLength="10"
                                        required
                                        value={phoneno}
                                        onChange={e => setPhoneno(e.target.value)}
                                        placeholder="Phone Number"
                                    />
                                    <label>Phone Number (excluding postal code)</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        className="form-control  "
                                        required
                                        value={rooms}
                                        onChange={e => setRooms(e.target.value)}
                                        placeholder="Rooms"
                                    />
                                    <label>Rooms</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="date"
                                        className="form-control  "
                                        required
                                        value={date}
                                        onChange={e => setDate(e.target.value)}
                                        placeholder="Date"
                                    />
                                    <label>Date</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea
                                        className="form-control"
                                        rows={50}
                                        required
                                        value={address}
                                        onChange={e => setAddress(e.target.value)}
                                        placeholder="Address"
                                    />
                                    <label>Address</label>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Book
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
