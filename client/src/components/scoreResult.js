import axios from "axios";
import { useEffect,useState } from "react";
import { useParams ,Link} from "react-router-dom";


const ScoreResult =()=>{
    const[rank,setRank]=useState()
    let {score}=useParams()

    useEffect(() => {

        function getrank() {

          const response = axios.post("http://localhost:3001/result",{score});
    
          return response.then((response) => {
            //   console.log("this is response from module 1",response.data)
    
            console.log(response.data);
            setRank(response.data)
          });
        }
        //  console.log(words);
        getrank();
      }, []);
    return(
        <div className="rank-page main-container ">
            <h1 className="title">Congratulations you finished the game ! </h1>
            <h2 >Your Rank is  <spna className="rank">{rank}</spna></h2>
            <button className="btn-try-again"><Link to="/">Try Again</Link></button>
        </div>
    )
} 


export default ScoreResult;