import { useEffect, useState } from "react";

// Styles
import "./App.css";

// Components
import QuizCard from "./components/QuizCard/QuizCrad";

// Services
import wordsService from "./services/words";
import rankService from "./services/rank";
import Score from "./components/Score/Score";

function App() {
  const [words, setWords] = useState();
  // Creating State to dynamically  handle the current question in the array
  const [currectQ, setCurrentQ] = useState(0);
  // Creating State for the Score
  const [score, setScore] = useState(0);
  // Creating State for Submission
  const [isSubmited, setIsSubmited] = useState(false);
  // Creating State for Submission
  const [rank, setRank] = useState(0);

  // Answering Function
  function handAnswer(e) {
    // Checking is the answer is corret
    let selectedAnswer = e.target.value;
    let corectAnswer = words[currectQ].pos;
    if (selectedAnswer === corectAnswer) {
      setScore((prev) => prev + 10);
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("wrong");
    }

    // Controling the State of the Current Qustion
    if (currectQ + 1 < words.length) {
      setCurrentQ((prev) => prev + 1);
    } else {
      // Show The Finishing Screen with the Rank
      setIsSubmited(true);
    }
  }

  // Fetcing The words from api using the useEffect Hook
  const getWords = async (len = 10) => {
    const words = await wordsService.getAll(len);
    setWords(words);
  };

  useEffect(() => {
    getWords(10);
  }, []);

  // Sending the score to the server to get the rank
  const getRank = async (score) => {
    const rank = await rankService.getRank(score);
    setRank(rank);
  };

  useEffect(() => {
    getRank(score);
  }, [score]);

  return (
    <>
      {isSubmited ? (
        <Score score={score} rank={rank} />
      ) : (
        <QuizCard words={words} currectQ={currectQ} handAnswer={handAnswer} />
      )}
    </>
  );
}

export default App;
