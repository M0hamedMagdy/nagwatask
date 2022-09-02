function Answers({ value, onClickHandler, currectQ }) {
  return (
    <button value={value} onClick={onClickHandler}>
      {value}
    </button>
  );
}

export default Answers;
