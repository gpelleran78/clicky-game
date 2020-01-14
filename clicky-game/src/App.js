import React from 'react';
import Card from './components/card';
import './App.css';

function App() {
  return (
    <div>
      <h1>Can You Remember Where the Cards Are?</h1>
      <Card
      id={1}
      width={100}
      height={100}
      back={'/img/back.png'}
      front={'/img/react.png'}
      flipped={flipped.includes(1)}
      handleClicked={() => handleClicked}
      />
    </div>
  );
}

export default App;
