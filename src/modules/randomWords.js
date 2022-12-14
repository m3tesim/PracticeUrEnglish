




const randomWords=(list)=>{
    //define the lenght of the loop from array length
  const length=list.length-1
  //store selected words 
  const selectedWords=[]
  
  //select a random Part of Speech
  const partOfSpeech=(wordType)=>{
    //this will select a random word from our data
    let random=Math.floor(Math.random() * (length) + 1)
    let word= list[random]
    //finding the desired type of the word to return it or run the function again 
    if(selectedWords.includes(word))return partOfSpeech(wordType)
    if (word.pos!==wordType) return partOfSpeech(wordType)
  
    else  return word
  
  }
  
  selectedWords.push(partOfSpeech("verb"))
  selectedWords.push(partOfSpeech("noun"))
  selectedWords.push(partOfSpeech("adjective"))
  selectedWords.push(partOfSpeech("adverb"))
  
  
  
  //select a random word with a random type  to fill the array of words
  for (selectedWords.length;selectedWords.length<10;selectedWords){
    let random=Math.floor(Math.random() * (length) + 1)
  let word= list[random]
  if(!selectedWords.includes(word))
  {
    selectedWords.push(word)
  }
  }
  
  
  //return new word list 
  return selectedWords
  
  }






  module.exports=randomWords;