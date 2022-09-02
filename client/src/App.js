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
  // Creating State for Sarting Over
  const [tryAgain, setTryAgain] = useState(0);

  // Answering Function
  function handAnswer(e) {
    // Checking is the answer is corret
    let selectedAnswer = e.target.value;
    let corectAnswer = words[currectQ].pos;
    if (selectedAnswer === corectAnswer) {
      setScore((prev) => prev + 10);
      e.target.classList.add("correct");
      setTimeout(() => e.target.classList.remove("correct"), 500);
    } else {
      e.target.classList.add("wrong");
      setTimeout(() => e.target.classList.remove("wrong"), 500);
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
  // Fetch again when the user try again
  useEffect(() => {
    getWords(10);
  }, [tryAgain]);

  // Sending the score to the server to get the rank
  const getRank = async (score) => {
    const rank = await rankService.getRank(score);
    setRank(rank);
  };

  useEffect(() => {
    getRank(score);
  }, [score]);

  // Reset EveryThing
  function startAgain() {
    setCurrentQ(0);
    setScore(0);
    setIsSubmited(false);
    setRank(0);
    setTryAgain((prev) => prev + 1);
  }
  return (
    <>
      {isSubmited ? (
        <Score clickHandler={startAgain} rank={rank} />
      ) : (
        <QuizCard words={words} currectQ={currectQ} handAnswer={handAnswer} />
      )}
    </>
  );
}

export default App;
