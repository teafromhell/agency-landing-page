import React from "react";
import egg from "../images/desktop/image-transform.jpg";
import glass from "../images/desktop/image-stand-out.jpg";
import tangerine from "../images/desktop/image-photography.jpg";
import cherry from "../images/desktop/image-graphic-design.jpg";

import "./Cards.scss";

function Cards() {
  return (
    <section className="cards">
      <div className="cards__transform">
        <div className="cards__transform-content">
          <b>Transform your brand</b>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of te marketing for you.
          </p>
          <h6>Learn more</h6>
        </div>
      </div>
      <div className="cards__egg">
        <img src={egg} alt="" />
      </div>
      <div className="cards__glass">
        <img src={glass} alt="" />
      </div>
      <div className="cards__standout">
        <div className="cards__standout-content">
          <b>Stand out to the right audience</b>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywrighters, we'll build and
            extend your brand in digital places.
          </p>
          <h6>Learn more</h6>
        </div>
      </div>
      <div className="cards__cherry">
        <img src={cherry} alt="" />
        <div className="cards__cherry-text">
          <b>Graphic Design</b>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client's
            attention.
          </p>
        </div>
      </div>
      <div className="cards__tangerine">
        <img src={tangerine} alt="" />
        <div className="cards__tangerine-text">
          <b>Photography</b>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cards;
