import React from "react";
import "./Reviews.scss";
import emily from "../images/image-emily.jpg";
import jennie from "../images/image-jennie.jpg";
import thomas from "../images/image-thomas.jpg";

function Rewviews() {
  return (
    <section className="review">
      <div className="review__name">
        <b>CLIENT TESTIMONIALS</b>
      </div>
      <div className="review__container">
        <div className="review__card">
          <img src={emily} alt="" />
          <p className="review__text">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <b>Emily R.</b>
          <p className="review__job">Marketing Director</p>
        </div>
        <div className="review__card">
          <img src={thomas} alt="" />
          <p className="review__text">
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>
          <b>Thomas S.</b>
          <p className="review__job">Chief Operating Officer</p>
        </div>
        <div className="review__card">
          <img src={jennie} alt="" />
          <p className="review__text">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <b>Jennie F.</b>
          <p className="review__job">Business Owner</p>
        </div>
      </div>
    </section>
  );
}

export default Rewviews;
