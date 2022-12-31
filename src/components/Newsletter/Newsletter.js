import "./Newsletter.css"
import React from "react"

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <h2 className="services__heading newsletter__heading">
          Subscribe to Newsletter
        </h2>
        <p className="web__paragraph newsletter__paragraph">
          We have a wide experience in experience design and strategy,
        </p>
        <form className="newsletter__form">
          <input
            className="newsletter__input"
            type="email"
            placeholder="Enter your email address"
          />

          <button className="btn btn--primary btn--send">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
