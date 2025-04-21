import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export function Header({ isAdmin, ...props }) {
    const { user, logout } = useContext(AuthContext);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Home-Services
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            {user && (
                                <li className="nav-item dropdown">
                                    <Link
                                        className="nav-link dropdown-toggle"
                                        to="#"
                                        id="servicesDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Services
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                        <li>
                                            <Link className="dropdown-item" to="/furniture">
                                                Furniture
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="/cleaning">
                                                Cleaning
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            )}
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus">
                                    About
                                </Link>
                            </li>
                            {user && (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Bookings">
                                            Bookings
                                        </Link>
                                    </li>
                                    {user.role === 'admin' && (
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/Admin">
                                                Admin
                                            </Link>
                                        </li>
                                    )}
                                </>
                            )}
                        </ul>
                        <div>
                            {user ? (
                                <button className="btn btn-danger" onClick={logout}>
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <Link className="btn btn-primary me-2" to="/signin">
                                        Sign In
                                    </Link>
                                    <Link className="btn btn-secondary" to="/signup">
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
