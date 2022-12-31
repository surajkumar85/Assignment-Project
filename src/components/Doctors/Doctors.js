import "./Doctors.css"
import React from "react"
import bitmap from "../../images/Bitmap.svg"

const Doctors = () => {
  return (
    <section className="doctors">
      <h2 className="doctors__heading services__heading">
        We Have The Best Specialist
      </h2>
      <p className="web__paragraph doctors__paragraph">
        We have a wide experience in experience design and strategy, with
        locally-rooted knowledge.
      </p>
      <div className="doctors__cards">
        <div className="doctors__card">
          <img src={bitmap} alt="doctors pic" className="doctors__img" />
          <div className="doctors__cardContent">
            <p className="doctors__name">Dr. Awaatif Al</p>
            <p className="doctors__specification">Dental Care</p>
          </div>
        </div>
        <div className="doctors__card">
          <img src={bitmap} alt="doctors pic" className="doctors__img" />
          <div className="doctors__cardContent">
            <p className="doctors__name">Dr. Filipa Gaspar</p>
            <p className="doctors__specification">Cardiology</p>
          </div>
        </div>
        <div className="doctors__card">
          <img src={bitmap} alt="doctors pic" className="doctors__img" />
          <div className="doctors__cardContent">
            <p className="doctors__name">Dr. Sukhmeet Gorae</p>
            <p className="doctors__specification">Neurological</p>
          </div>
        </div>
        <div className="doctors__card">
          <img src={bitmap} alt="doctors pic" className="doctors__img" />
          <div className="doctors__cardContent">
            <p className="doctors__name">Dr. Siri Jakobsson</p>
            <p className="doctors__specification">Prediatrics</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Doctors
