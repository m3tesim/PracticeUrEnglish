const Form =({submitWord,handleCheck,checkedRef})=>{
    return(
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
    )
}


export default Form;