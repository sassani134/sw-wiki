import { useState, useEffect } from 'react';
import axios from 'axios';




function Character(props) {
    const [starships, setStarships] = useState(props.starships);



  return (
    <div>
        <p> Nom: {props.name}</p>
        <p> Couleur des yeux: {props.eye_color}</p>
        <p> Naissance: {props.birth_year} </p>
        <p> Genre: {props.gender}</p>
        <p> Vaiseaux:{props.starships}</p>
        <p>création:{props.created} </p>
        <p>édition de la ressource:{props.edited}</p>

    </div>
  );
}

export default Character;
