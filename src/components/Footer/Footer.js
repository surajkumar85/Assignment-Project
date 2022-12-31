import "./Footer.css"
import React from "react"
import Navbar from "../Navbar/Navbar"
import facebook from "../../images/facebook.svg"
import google from "../../images/google.svg"
import twitter from "../../images/twitter.svg"

const Footer = () => {
  return (
    <footer className="footer">
      <Navbar />
      <div className="footer__media">
        <div className="footer__mediaIcon">
          <a>
            <img src={facebook} alt="facebook icon" className="footer__img" />
          </a>
          <a>
            <img src={google} alt="google icon" className="footer__img" />
          </a>
          <a>
            <img src={twitter} alt="twitter icon" className="footer__img" />
          </a>
        </div>
        <p className="footer__copywright">©2020 PodPayment - 2020</p>
      </div>
    </footer>
  )
}

export default Footer
