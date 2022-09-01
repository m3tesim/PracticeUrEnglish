//import { getWords } from "./dataModules";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const handleCheck = (e) => {
    setValue(e.target.value);
  };

  //submit answer
  const submitWord = (e) => {
    e.preventDefault();

    //add current choosed value to the array of answers in state
    console.log(value, "the value adeed");
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
    //axios.post(`http://localhost:3001/data`,{answersScore})
    if (count < 2) {
      setCount(count + 1);
    } else {
      navigate(`/result/${answersScore}`);

      //axios.post(`http://localhost:3001/data`,{})
        /*.then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
*/
      // postRequest.then((response) => {
      //   console.log("this is response from module 1",response.data)

      // return  navigate(`/result/${response.data}`);
      //setWords(response.data);
      // })
    }

    //console.log(answers,"this is the array of answerd questions");
  };
  console.log("this is the coorect answers array", correctAnswers);

  console.log("this is the array current score", answersScore);
  console.log(
    "the current answers is ",
    correctAnswers[count - 1] || "no value"
  );
  console.log("this is count ", count);
  return (
    <>
      <div className="main-container">
        <section>
          <h1 className="title">
            Choose the right answer that describe this word
          </h1>
          <div className="main-word">
            {" "}
            <h2>{words[count]?.word}</h2>
          </div>
        </section>
        <section>
          <form onSubmit={(e) => submitWord(e)}>
            <div>
              <input
                ref={(element) => {
                  checkedRef.current[0] = element;
                }}
                onChange={(e) => handleCheck(e)}
                name="wordType"
                id="noun"
                type="radio"
                value="noun"
              />
              <label htmlFor="noun"> Noun</label>
              <input
                ref={(element) => {
                  checkedRef.current[1] = element;
                }}
                onChange={(e) => handleCheck(e)}
                name="wordType"
                id="verb"
                type="radio"
                value="verb"
              />
              <label htmlFor="verb"> Verb</label>
              <input
                ref={(element) => {
                  checkedRef.current[2] = element;
                }}
                onChange={(e) => handleCheck(e)}
                name="wordType"
                id="adjective"
                type="radio"
                value="adjective"
              />
              <label htmlFor="adjective"> Adjective</label>
              <input
                ref={(element) => {
                  checkedRef.current[3] = element;
                }}
                onChange={(e) => handleCheck(e)}
                name="wordType"
                id="adverb"
                type="radio"
                value="adverb"
              />
              <label htmlFor="adverb"> Adverb</label>
            </div>
            <div>
              <button type="submit" className="btn-confirm">
                {" "}
                Confirm{" "}
              </button>
            </div>
          </form>
        </section>
      </div>
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
      </footer>
    </>
  );
}

export default App;
