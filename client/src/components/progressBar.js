const ProgressBar = ({ correctAnswers }) => {
  return (
    <footer>
      Progress:
      <span
        className={
          correctAnswers[0] === true
            ? "right"
            : correctAnswers[0] === false
            ? "wrong"
            : ""
        }></span>
      <span
        className={
          correctAnswers[1] === true
            ? "right"
            : correctAnswers[1] === false
            ? "wrong"
            : ""
        }></span>
      <span
        className={
          correctAnswers[2] === true
            ? "right"
            : correctAnswers[2] === false
            ? "wrong"
            : ""
        }></span>
      <span
        className={
          correctAnswers[3] === true
            ? "right"
            : correctAnswers[3] === false
            ? "wrong"
            : ""
        }></span>
      <span
        className={
          correctAnswers[4] === true
            ? "right"
            : correctAnswers[4] === false
            ? "wrong"
            : ""
        }></span>
      <span
        className={
          correctAnswers[5] === true
            ? "right"
            : correctAnswers[5] === false
            ? "wrong"
            : ""
        }></span>
      <span
        className={
          correctAnswers[6] === true
            ? "right"
            : correctAnswers[6] === false
            ? "wrong"
            : ""
        }></span>
      <span
        className={
          correctAnswers[7] === true
            ? "right"
            : correctAnswers[7] === false
            ? "wrong"
            : ""
        }></span>
      <span
        className={
          correctAnswers[8] === true
            ? "right"
            : correctAnswers[8] === false
            ? "wrong"
            : ""
        }></span>
      <span
        className={
          correctAnswers[9] === true
            ? "right"
            : correctAnswers[9] === false
            ? "wrong"
            : ""
        }></span>
        <div >{correctAnswers.length}0%</div>
    </footer>
  );
};

export default ProgressBar;
