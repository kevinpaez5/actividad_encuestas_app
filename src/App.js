import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// Componenente de las paginas
import Encuestas from './components/Encuestas';
function App() {
  // Estado para rastrear las encuestas
  const encuestas = [
    {id: 1, pregunta: '¿Cual es tu color favorito?', opciones: ['Rojo', 'Azul', 'Verde']},
    {id: 2, pregunta: '¿Cual es tu comida favorita?', opciones: ['Pizza', 'Hamburguesa', 'Sushi']},
  ];

  return (
    <div className="App">
      <h1>Aplicacion de Encuestas</h1>

      {/* Contenido de las páginas */}
      <Encuestas encuestas={encuestas} />
    </div>
  );
}

export default App;
