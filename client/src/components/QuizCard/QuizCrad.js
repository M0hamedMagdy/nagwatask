import { useState } from "react";
import Answers from "../Answers/Answers";

function QuizCard({ words }) {
  const answers = ["verb", "noun", "adverb", "adjective", "skip"];
  const [currectQ, setCurrentQ] = useState(0);

  // Answering Function
  function handAnswer(e) {
    setCurrentQ((prev) => prev + 1);
  }
  return (
    <section>
      <h1>Can You Guess the Word's Part Of Speech</h1>
      <span>{words && words[currectQ].word}</span>

      {answers &&
        answers.map((answer) => (
          <Answers value={answer} onClickHandler={handAnswer} />
        ))}
    </section>
  );
}
export default QuizCard;
