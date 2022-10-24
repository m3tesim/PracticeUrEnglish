const ProgressBar = ({ answers ,questions}) => {
  //if the questions array not defined we declare it with an empty array
   let progressQuestion=questions||[]

  //calculate the persentage of the progress
  let progress=(answers.length/questions.length)*100
      progress.toFixed(2)
  return (
    <footer>
      Progress:

      {progressQuestion.map((q,index)=>(
         <span 
         key={index}
         className={
           answers[index] === true
             ? "right"
             : answers[index] === false
             ? "wrong"
             : ""
         }></span>
      ))}
        <div >{progress}%</div>
    </footer>
  );
};

export default ProgressBar;
