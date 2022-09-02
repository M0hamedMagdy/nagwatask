function Score({ score, rank }) {
  return (
    <h1>{`Your Score is ${score}, Your Rank is Better than ${rank.rank}% `}</h1>
  );
}

export default Score;
