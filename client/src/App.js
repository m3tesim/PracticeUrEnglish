//import { getWords } from "./dataModules";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./components/progressBar";
import Form from "./components/form";

function App() {
  const [words, setWords] = useState("");
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [answersScore, setAnswersScore] = useState(null);
  const checkedRef = useRef([]);

  let navigate = useNavigate();

  useEffect(() => {
    function getWords() {
      const request = axios.get("http://localhost:3001/data");

      return request.then((response) => {
        //   console.log("this is response from module 1",response.data)

        return setWords(response.data);
      });
    }
    //  console.log(words);
    getWords();
  }, []);

//this take the value of the choosen option and store it 
  const handleCheck = (e) => {
    setValue(e.target.value);
  };

  //submit answer
  const submitWord = (e) => {
    e.preventDefault();

    //when the user answers the poll the score will increse by 10 or by 0 and get stored 
    if (value === words[count].pos) {
      setCorrectAnswers([...correctAnswers, true]);
      setAnswersScore(answersScore + 10);
    } else {
      setCorrectAnswers([...correctAnswers, false]);
    }
    //map through the checkBox inputs stored in checkedRef to reset thier values after submiting the answer
    checkedRef.current.map((element) => (element.checked = false));

    //reset value for new question
    setValue(null);
    // counting till ten questions have been recieved 
    if (count < 9) {
      setCount(count + 1);
    } else {
      navigate(`/result/${answersScore}`);

    
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
          <Form checkedRef={checkedRef} handleCheck={handleCheck} submitWord={submitWord} />
        </section>
      </div>
       <ProgressBar correctAnswers={correctAnswers} />
    </>
  );
}

export default App;
