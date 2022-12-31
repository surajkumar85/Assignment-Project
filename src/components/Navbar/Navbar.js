import React from "react"
import "./Navbar.css"
import logo from "../../images/logo.svg"
import { Link } from "gatsby"

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt="Company brand logo" />
      <div className="navbar__links">
        <Link to="/" className="navbar__link active__link">
          Home
        </Link>
        <Link to="/about" className="navbar__link">
          About
        </Link>
        <Link to="/services" className="navbar__link">
          Services
        </Link>
        <Link to="/news" className="navbar__link">
          News
        </Link>
        <button className="btn btn--primary ml-2">Contact</button>
      </div>
    </div>
  )
}

export default Navbar
