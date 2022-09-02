// Styles
import "./Answers.css";

function Answers({ value, onClickHandler, currectQ }) {
  return (
    <button className="option" value={value} onClick={onClickHandler}>
      {value}
    </button>
  );
}

export default Answers;
