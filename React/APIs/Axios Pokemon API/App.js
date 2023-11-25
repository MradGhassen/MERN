import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        console.log(response.data.results);
        setPokemon(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <h1>Axios Pokemon API Assignment</h1>
      <ul>
        {pokemon.map((pokemonObj, index) => (
          <li key={index}>{pokemonObj.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
