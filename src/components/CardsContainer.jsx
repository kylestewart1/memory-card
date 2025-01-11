import { useState } from "react";
import Card from "./Card";
import "../styles/CardsContainer.css"

const characterIDs = [1,2,3,10,5,9,11,4,14,64,16,32]

export default function CardsContainer() {
  const [cards, setCards] = useState(characterIDs.map(id => {
    return {id, clicked: false};
  }));

  function handleClick() {

  }

  const display = cards.map(card => {
    return (
      <Card
        key={card.id}
        id={card.id}
        onClick={handleClick}
      />
    )
  })

  return (
    <div className="cards-container">
      {display}
    </div>
  )
}