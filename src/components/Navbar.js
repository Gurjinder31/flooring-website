import React from 'react'

import logo from "../assets/logo.png";
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div class="container">
                    <li>
                        <a className="navbar-brand" href="/">
                            <img className="navbar-logo active" alt='' src={logo} />
                        </a>
                    </li>
                    <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">

                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
