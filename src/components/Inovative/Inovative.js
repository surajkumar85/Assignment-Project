import React from "react"
import "./Inovative.css"
import doctor from "../../images/doctorwoman.svg"
import nurse from "../../images/nurse.svg"
import ambulance from "../../images/ambulance.svg"

const Inovative = () => {
  return (
    <section className="inovative">
      <div className="inovative__content">
        <h2 className="inovative__heading">Clinic With Innovative</h2>
        <p className="web__paragraph">
          We provide the most full medical services, so every person could heave
          the oppurtunity to receive qualitative medical help.
        </p>
        <button className="btn btn--primary py-1">Learn More</button>
      </div>
      <div className="inovative__images">
        <div className="inovative__card">
          <img src={doctor} alt="doctor image" className="inovative__image" />
          <p className="inovative__cardText">Qualified Doctors</p>
        </div>
        <div className="inovative__card">
          <img src={nurse} alt="doctor image" className="inovative__image" />
          <p className="inovative__cardText">Emergency Care</p>
        </div>
        <div className="inovative__card">
          <img
            src={ambulance}
            alt="doctor image"
            className="inovative__image"
          />
          <p className="inovative__cardText">24 Hours Service</p>
        </div>
      </div>
    </section>
  )
}

export default Inovative
