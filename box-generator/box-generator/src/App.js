import React, { useState } from 'react';
import './App.css';
import ColorForm from './components/ColorForm';
import ColorBoxes from './components/ColorBoxes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';



function App() {
// creates a variable to pass to the parent
  const [boxes, setBoxes] = useState([]);
  
// creates a function for the child -- (ColorForm) --
  const handleNewBox = (color) => {
// setBoxes and pass in a brand new array containing current boxes plus 1 more    
    setBoxes([...boxes, color]);
  };

  return (
    <Card className="container mt-5 text-center">
      <div className="card-body">
    
      <ColorForm onNewBox={handleNewBox} />   
      <ColorBoxes boxes={boxes} />
    
    </div>
    </Card>
  );
}

export default App;