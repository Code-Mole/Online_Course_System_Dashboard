import React from "react";
import "./Cards.css";
import { cardData } from "./Data.js";
import Card from "./Card.jsx";

function Cards() {
  return (
    <div className="cards">
      {cardData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
