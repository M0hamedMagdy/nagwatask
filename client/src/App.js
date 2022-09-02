import { useEffect, useState } from "react";

// Components
import QuizCard from "./components/QuizCard/QuizCrad";

// Services
import wordsService from "./services/words";

function App() {
  const [words, setWords] = useState();

  // Fetcing The words from api using the useEffect Hook
  const getWords = async (len = 10) => {
    const words = await wordsService.getAll(len);
    setWords(words);
  };

  useEffect(() => {
    getWords(10);
  }, []);

  return (
    <>
      <QuizCard words={words} />
    </>
  );
}

export default App;
