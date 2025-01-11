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

  return (
    <>
      <Header />
      <CardsContainer cards={cards}/>
    </>
  )
}

export default App
