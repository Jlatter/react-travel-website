import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-8.jpg"
              text="Explore the EPIC jungle"
              label="Adventure"
              path="/about"
            />
            <CardItem
              src="images/img-2.jpg"
              text="See the SEA!"
              label="Marine"
              path="/about"
            />
            <CardItem
              src="images/img-5.jpg"
              text="The forest"
              label="Nature"
              path="/about"
            />
            <CardItem
              src="images/img-6.jpg"
              text="The forest"
              label="Nature"
              path="/about"
            />
            <CardItem
              src="images/img-7.jpg"
              text="The forest"
              label="Nature"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
