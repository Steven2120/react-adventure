import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="../../images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon"
              label="Adventure"
              path="/services"
            />
            <CardItems
              src="../../images/img-2.jpg"
              text="Travel through the islands of Bali"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="../../images/img-3.jpg"
              text="Set sail in the Atlantic Ocean visiting uncharted waters"
              label="Mystery"
              path="/services"
            />
            <CardItems
              src="../../images/img-4.jpg"
              text="Experience Football on top of the Himalayan mountains"
              label="Adventure"
              path="/products"
            />
            <CardItems
              src="../../images/img-8.jpg"
              text="Ride through the Sahara desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
