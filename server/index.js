const express = require('express')
const cors = require('cors');

const app = express()
const data = require('./testData.json');
const randomWords= require('./functions') ;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/data', (req, res) => {
  const Words=randomWords(data.wordList)
  res.json(Words)
})

app.get('/data/wordList', (req, res) => {
  const newdata=randomWords(data.wordList)

  res.json(newdata)
})






app.post('/result', (req, res) => {
  //console.log(req.body);
  const score = req.body.score
  if (!score) {
    return response.status(400).json({ 
      error: 'content is  missing' 
    })
  }
  let belowScore=data.scoresList.filter(s=>s<score)
  const persantage=(belowScore.length/data.scoresList.length)*100
  
    res.json("%"+persantage.toFixed(2))
});







const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
