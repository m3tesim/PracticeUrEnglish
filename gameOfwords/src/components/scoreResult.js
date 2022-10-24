import { useEffect,useState } from "react";
import { useParams ,Link} from "react-router-dom";
import { data } from "../testData";
import getRank from "../modules/getRank";

const ScoreResult =()=>{
    const[rank,setRank]=useState()
    let {score}=useParams()

    useEffect(() => {

          let persantage = getRank(data.scoresList, score);
              persantage="%" + persantage.toFixed(2)
            setRank(persantage)
          
        
      }, [score]);
    return(
        <div className="rank-page main-container ">
            <h1 className="title">Congratulations you finished the game ! </h1>
            <h2 >Your Rank is  <span className="rank">{rank}</span></h2>
            <button className="btn-try-again"><Link to="/">Try Again</Link></button>
        </div>
    )
} 


export default ScoreResult;