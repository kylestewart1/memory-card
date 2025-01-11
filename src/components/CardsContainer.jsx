import Card from "./Card";
import "../styles/CardsContainer.css"


export default function CardsContainer({ cards }) {
  

  function handleClick() {

  }

  const shuffled = [...cards].sort(() => Math.random() - 0.5);
  const display = shuffled.map(card => {
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