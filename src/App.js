import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header.js';
import Search from './components/Search.js';
import CharacterGrid from './components/characters/CharacterGrid.js';


function App() {
  
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
    const [query, setQuery] = useState('');
  
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      
      console.log(result.data)
      
      setItems(result.data)
      setLoaded(true)
    }
    
    fetchItems()  
  }, [query])
  
  
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={loaded} items={items} />
    </div>
  );
}

export default App;
