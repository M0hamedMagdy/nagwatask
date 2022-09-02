// Styles
import "./Score.css";

function Score({ rank, clickHandler }) {
  return (
    <section className="rank-screen">
      <h1 className="score">{`Your Rank is Better than ${rank.rank}% `}</h1>;
      <button className="try-again" onClick={clickHandler}>
        Try Again
      </button>
    </section>
  );
}

export default Score;
