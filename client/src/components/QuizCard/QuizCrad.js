// Styles
import "./QuizCard.css";
// Components
import Answers from "../Answers/Answers";

function QuizCard({ words, currectQ, handAnswer }) {
  const options = ["verb", "noun", "adverb", "adjective", "skip"];
  return (
    <section className="quizCard">
      <h1 className="question">Can you guess the word's Part Of Speech?</h1>
      <span className="word">{words && words[currectQ].word}</span>

      <div className="options">
        {options &&
          options.map((answer) => (
            <Answers key={answer} value={answer} onClickHandler={handAnswer} />
          ))}
      </div>

      {/* Progress bar for the current Qeustion */}
      <progress value={currectQ + 1} max="10">
        {currectQ * 10} %
      </progress>
      <span className="question-number">
        {currectQ + 1} / {words && words.length}
      </span>
    </section>
  );
}
export default QuizCard;
