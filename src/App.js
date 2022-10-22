import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const BaseURL = 'https://swapi.dev/api/';

  //
  const [allCharacters, setAllCharacters] = useState([]);
  const [oneCharacter, setOneCharacter] = useState(null);
  // the value of the search field 
  const [name, setName] = useState('');
  // the search result
  const [foundCharacters, setFoundCharacters] = useState(allCharacters);


  const fetchpeople = async () => {
    const response = await axios.get(`${BaseURL}people/`);
    setAllCharacters(response.data.results);
  }

  const scrapePictures = async () => {
    const response = await axios.get(`${BaseURL}people/`);
    setAllCharacters(response.data.results);
  }

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = allCharacters.filter((character) => {
        return character.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundCharacters(results);
    } else {
      setFoundCharacters(allCharacters);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };


  useEffect(() => {
    fetchpeople();
  }, []);


  return (
  <div className="App">
    <Header />
    <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

    <div className="user-list">
      {foundCharacters && foundCharacters.length > 0 ? (
        foundCharacters.map((user) => (
          <li key={user.id} className="user">
            <span className="user-name">{user.name}</span>
          </li>
        ))
      ) : (
        <h1>Pas de resultat</h1>
      )}
    </div>
    

    </div>
  );
}

export default App;
