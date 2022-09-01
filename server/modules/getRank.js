


const getRank=(scoresList,score)=>{
    let belowScore=scoresList.filter(s=>s<score)
    const result=(belowScore.length/scoresList.length)*100
    return (result)
  }

  module.exports=getRank;