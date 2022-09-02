import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./components/progressBar";
import Form from "./components/form";

function App() {
  const [words, setWords] = useState("");
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [answersScore, setAnswersScore] = useState([]);
  const checkedRef = useRef([]);

  let navigate = useNavigate();

  useEffect(() => {
    function getWords() {
      const request = axios.get("http://localhost:3001/");

      return request.then((response) => {

        return setWords(response.data);
      });
    }
    getWords();
  }, []);


//this take the value of the choosen option and store it 
  const handleCheck = (e) => {
    setValue(e.target.value);
  };

  //submit answer
  const submitWord = (e) => {
    e.preventDefault();

    //when the user answers the poll the answer will be added to answers and if correct to answers score
    if (value === words[count].pos) {
      setAnswers([...answers, true]);
      setAnswersScore([...answersScore,`${words[count].word}`]);
    } else {
      setAnswers([...answers, false]);
    }
    //map through the checkBox inputs stored in checkedRef to reset thier values after submiting the answer
    checkedRef.current.map((element) => (element.checked = false));

    //reset value choosed in previous question
    setValue(null);
    // counting till ten questions have been recieved 
    if (count < 9) {
      setCount(count + 1);
    } else {
      //after all question have been answered it will calculate score and navigate to rank page
      let score =(answersScore.length/words.length)*100
      navigate(`/result/${score}`);

    
    }

  };




  return (
    <>
      <div className="main-container">
        <section>
          <h1 className="title">
            Choose the right answer that describe this word
          </h1>
          <div className="main-word">
            <h2>{words[count]?.word}</h2>
          </div>
        </section>
        <section>
          <Form value={value} checkedRef={checkedRef} handleCheck={handleCheck} submitWord={submitWord} />
        </section>
      </div>
       <ProgressBar answers={answers} questions={words} />
    </>
  );
}

export default App;
