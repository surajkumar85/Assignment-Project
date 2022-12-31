import React from "react"
import "./Hero.css"
import rectangle from "../../images/Rectangle.svg"

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h2 className="hero__subheading">Welcome to MediCare+ Clinic</h2>
        <h1 className="hero__heading">Best Specialists</h1>
        <p className="web__paragraph">
          We are on the leading edge of cancer care. Providing the full
          continuum of cancer treatments and supportive care services in a
          single convenient location.
        </p>
        <div className="hero__btns">
          <button className="btn btn--primary py-1">Make an Appointment</button>
          <button className="btn btn--ghost py-1">Departments</button>
        </div>
      </div>
      <div className="hero__image">
        <img src={rectangle} alt="vacant hero space" className="hero__img" />
      </div>
    </section>
  )
}

export default Hero
