import React from "react";

function Encuestas({ encuestas }) {
    return (
      <div>
        <h2>Encuestas Disponibles</h2>
        <ul>
          {encuestas.map(encuesta => ( //iteracion sobre las encuestas y por cada una se crea un li
            <li key={encuesta.id}> 
               <p>{encuesta.pregunta}</p>
               <ul>
                {encuesta.opciones.map((opcion, index) => ( //interacion sobre las opciones y por cada una se crea un li
                  <li key={index}>
                    <label>
                      <input type="radio" name={`encuesta_${encuesta.id}`} value={opcion}/>
                      {opcion}
                    </label>
                  </li>
                ))}
               </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default Encuestas;