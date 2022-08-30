import React, { useState, useEffect } from 'react';
import './App.css';
import TestCard from './components/TestCard/TestCard';
import wordsService from "./services/words";


function App() {
  const [words, setWords] = useState([]);

  async function getWords() {
    const words = await wordsService.getAll();
    setWords(words);
  }


  useEffect(() => {
    getWords();
  }, []);



  return (
    <div className="App">
      <TestCard words={words} />
    </div>
  );
}

export default App;
