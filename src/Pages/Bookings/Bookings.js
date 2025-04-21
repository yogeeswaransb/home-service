import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import logo from '../../images/asy.png'
import axios from "axios";
import URL from "../URL/Url"
import './booking.css'

export default function Bookings() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const userId = sessionStorage.getItem("userId") // Make sure this is set at login
        console.log(userId)
        if (!userId) {
            toast.error("User ID not found. Please log in again.");
            return;
        }
        const url = `${URL}user/cleaning/getbyidcleaning`
        axios.get(url, {
            params: { userId: userId }
        }).then((response) => {
            const result = response.data;
            setData(result);
        }).catch(err => {
            console.error(err);
            toast.error("Failed to fetch data");
        });
    }, []);

    const navigate = useNavigate();

    const logout = () => {
        toast.error("Logging Off");
        alert("Logging off");
        navigate("/");
    };

    const handleApprove = (itemId) => {
        const approvedData = { userId: itemId, status: "Approved" }; // Adjust "Approved" as needed
        axios.post(`${URL}user/cleaning/approve`, approvedData)
            .then((response) => {
                toast.success("Approved successfully");
                // Optionally remove the approved request from the list
                setData(prevData => prevData.filter(item => item.id !== itemId));
            })
            .catch(err => {
                console.error(err);
                toast.error("Approval failed");
            });
    };

    return (
        <div className='container'>
            <table className='table table-hover table-bordered table-striped table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>Rooms</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.phoneno}</td>
                            <td>{item.address}</td>
                            <td>{item.date}</td>
                            <td>{item.rooms}</td>
                            <td>
                                <button className='btn btn-primary me-2' onClick={() => handleApprove(item.id)}>Approve</button>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
