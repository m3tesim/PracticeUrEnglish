const express = require("express");
const cors = require("cors");

const app = express();
const data = require("./testData.json");
const randomWords = require("./modules/randomWords");
const getRank = require("./modules/getRank");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Get ten test words Organised  from the data 
app.get("/", (req, res) => {
  const Words = randomWords(data.wordList);
  res.json(Words);
});


//send score result of the test to the backend and recieve the rank
app.post("/result", (req, res) => {
  //console.log(req.body);
  const score = req.body.score;
  if (!score) {
    return response.status(400).json({
      error: "content is  missing",
    });
  }
  const persantage = getRank(data.scoresList, score);
  res.json("%" + persantage.toFixed(2));
});




