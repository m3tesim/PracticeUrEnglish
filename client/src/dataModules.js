import axios from "axios";


function getWords() {
    const request = axios.get("http://localhost:3001/data");

    return request.then((response) => {
      //   console.log("this is response from module 1",response.data)
      
      return response.data
    });
  }


const getWord = async () =>{
    try {
      
        const {data:response} = await axios.get("http://localhost:3001/data") //use data destructuring to get data from the promise object
        console.log("this is response from module",response)
      return response
    }
      
    catch (error) {
      console.log(error);
    }
  }



export  {getWords}