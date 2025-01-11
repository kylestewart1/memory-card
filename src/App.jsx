import './App.css'
import '../assets/fonts/Saiyan-Sans.ttf'
import CardsContainer from './components/CardsContainer'
import Header from './components/Header'
import { useState } from 'react'

const characterIDs = [1,2,3,10,5,9,11,4,14,64,16,32];

function App() {
  const [cards, setCards] = useState(characterIDs.map(id => {
    return {id, clicked: false};
  }));
  const [highestScore, setHighestScore] = useState(0);

  const currentScore = cards.filter(card => card.clicked).length;

  function handleClick(id) {
    let clickedCard = {...cards.find(card => card.id === id)};
    if (!clickedCard.clicked) {
      clickedCard.clicked = true;
      setCards([
        ...cards.filter(card => card.id !== id),
        clickedCard
      ]);
    } else {
      const currentRecord = highestScore;
      setHighestScore(Math.max(currentRecord, currentScore));
      setCards(cards.map(card => {
        return {...card, clicked: false};
      }));
    }
  }

  return (
    <>
      <Header currentScore={currentScore} highestScore={highestScore}/>
      <CardsContainer cards={cards} handleClick={handleClick}/>
    </>
  )
}

export default App
