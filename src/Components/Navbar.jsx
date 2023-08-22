import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import GuviBlogLogo from '../assets/GuviBlogLogo.png'

export default function Navbar() {

    return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img width="121" height="53" src={GuviBlogLogo} alt="Guvi-blog-logo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item me-3">
          <Link className="nav-link active" aria-current="page" href="#!">COURSES</Link>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LIVE CLASSES
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#!">Action</Link></li>
            <li><Link className="dropdown-item" href="#!">Another action</Link></li>
            <li><Link className="dropdown-item" href="#!">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRACTICE
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#!">Action</Link></li>
            <li><Link className="dropdown-item" href="#!">Another action</Link></li>
            <li><Link className="dropdown-item" href="#!">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           RESOURCES
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#!">Action</Link></li>
            <li><Link className="dropdown-item" href="#!">Another action</Link></li>
            <li><Link className="dropdown-item" href="#!">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OUR PRODUCTS
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#!">Action</Link></li>
            <li><Link className="dropdown-item" href="#!">Another action</Link></li>
            <li><Link className="dropdown-item" href="#!">Something else here</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}