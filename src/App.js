import './App.css';
import React, { useState} from 'react';
import Tarjeta from './components/Tarjeta';
import Item from './components/Item';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const handleButtonClick = (itemName) => {
    setSelectedItem(itemName);
  };

  
 

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appStyles = {
    backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
    color: isDarkMode ? '#fff' : '#333',
  };


  return (
    <div className="App" style={appStyles}>
      <h1>¡Bienvenidos!</h1>
      <h3>Contanos, ¿cual es tu plataforma favorita?</h3>
      
      {selectedItem && (
        <div>
          
          {Item.map((item) => {
            if (item.name === selectedItem) {
              return <h2 key={item.id}>{selectedItem}</h2>;
            }
            return null;
          })}
        </div>
      )}
      

      <Tarjeta onButtonClick={handleButtonClick} />

      <button onClick={toggleDarkMode}>
      {isDarkMode ? '☀️' : '🌙'}
      </button>



    </div>
  );
}

export default App;
