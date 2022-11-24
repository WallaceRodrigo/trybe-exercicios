import React from 'react';
import Image from './Image';
import staringCat from './cat-2083492_1280.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <Image source={staringCat} alternativeText="Cute cat staring"/>
    </div>
  );
}

export default App;
