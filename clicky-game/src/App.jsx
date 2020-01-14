import React, { useState, useEffect } from 'react';
import Board from './components/board';

import initializeDeck from './deck'

export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])

  useEffect(() => {
    setCards(initializeDeck())
  }, [])

  const handleClick = (id) => setFlipped([...flipped, id])

  return (
    <div>
      <h1>Can You Remember Where the Cards Are?</h1>
      <Board
        cards={cards}
        flipped={flipped} handleClick={handleClick} 
        />
    </div>
  )
}

