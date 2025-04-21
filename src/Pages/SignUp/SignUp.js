import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import './Signup.css'

export default function Signup() {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            toast.error("Please confirm password")
            return
        }
        const body = { firstName, lastName, email, phoneNo, password }
        const url = "http://localhost:7071/user/signup"
        axios.post(url, body).then((response) => {
            const result = response.data
            if (result.status === undefined) {
                toast.success("Registered Successfully")
                navigate('/signin')
            } else {
                toast.error(result.error)
            }
        }).catch(() => {
            toast.error("Signup failed")
        })
    }

    return (
        <div className="container my-5">
            <h3 className="text-center py-3">Home-Services</h3>
            <form onSubmit={handleSignUp}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="firstName" 
                                placeholder="First Name" 
                                onChange={e => setFirstName(e.target.value)} 
                                required 
                            />
                            <label htmlFor="firstName">First Name</label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <div className="form-floating">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="lastName" 
                                placeholder="Last Name" 
                                onChange={e => setLastName(e.target.value)} 
                                required 
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                </div>
                <div className="mb-3 form-floating">
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="name@example.com" 
                        onChange={e => setEmail(e.target.value)} 
                        required 
                    />
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="mb-3 form-floating">
                    <input 
                        type="tel" 
                        className="form-control" 
                        id="phoneNo" 
                        placeholder="Phone Number" 
                        onChange={e => setPhoneNo(e.target.value)} 
                        pattern="\d{10}" 
                        required 
                    />
                    <label htmlFor="phoneNo">Phone Number (10 digits)</label>
                </div>
                <div className="mb-3 form-floating">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password" 
                        onChange={e => setPassword(e.target.value)} 
                        minLength="5"
                        maxLength="10"
                        required 
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="mb-3 form-floating">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password" 
                        onChange={e => setConfirmPassword(e.target.value)} 
                        minLength="5"
                        maxLength="10"
                        required 
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary float-end">Submit</button>
                </div>
            </form>
        </div>
    )
}
