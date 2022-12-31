import "./Testimonials.css"
import React from "react"
import avatar from "../../images/Oval.svg"
import coma from "../../images/coma.svg"
import { useReviews } from "../../hooks/useReviews"

const Testimonials = () => {
  const { reviews } = useReviews()
  console.log(reviews)
  return (
    <section className="testimonials">
      <h2 className="services__heading testimonials__heading">
        What Our Customers Say
      </h2>
      <div className="testimonials__reviews">
        {reviews &&
          reviews.map(review => (
            <div className="testimonials__review">
              <p className="web__paragraph">
                {review.Reviews.substring(0, 100)}
              </p>
              <div className="testimonials__author">
                <img
                  src={avatar}
                  className="testimonials__authorImage"
                  alt="author pic"
                />
                <div className="testimonials__authorInfo">
                  <p className="testimonials__authorName">{review.Name}</p>
                  <p className="testimonials__patient">Patient</p>
                </div>
              </div>
              <img
                src={coma}
                alt="coma symble"
                className="testimonials__coma"
              />
            </div>
          ))}
      </div>
    </section>
  )
}

export default Testimonials
