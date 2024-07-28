"use client"
import React from 'react';


const Navbar = ({setCity}) => {
       
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://www.zameensquare.com/_next/static/media/zameen-logo.be926326.png" alt="logo" height="30" />
                </a>
                <div className="d-flex align-items-center">
                    <select className="form-select border-0  bg-primary-outline  opacity-75 text-bolder me-2" aria-label="Default select example" onChange={(e) => setCity(e.target.value)}>
                        <option value="Mysore">Mysore</option>
                        <option value="Bengaluru">Bengaluru</option>
                    </select>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-primary"href="#">Buy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="#">Rent</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="#">Sell</a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-primary mx-2">Post Property</button>
                        <button className="btn btn-primary mx-2">Login</button>
                    </div>
                
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;
