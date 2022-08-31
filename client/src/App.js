
function App() {
  return (
    <>
    <div className="main-container">

      <section >
        <h1 className="title">Choose the right answer that describe this word</h1>
        <div className="main-word"> <h2>"Word"</h2></div>
      </section>
      <section>
        <form>
          <div>
          <input name="type" id="noun" type="radio" value="noun"/>
          <label  for="noun" > Noun</label>
          <input name="type" id="verb" type="radio" value="verb"/>
          <label  for="verb" > Verb</label>
          <input name="type" id="adjective" type="radio" value="adjective"/>
          <label  for="adjective" > Adjective</label>
          <input name="type" id="adverb" type="radio" value="adverb"/>
          <label  for="adverb" > Adverb</label>
          </div>
          <div>
          <button type="submit" className="btn-confirm"> Confirm </button>
          </div>
        </form>
      </section>
      
    </div>
    <footer> 
Progress: 
<span ></span>
<span ></span>
<span ></span>
<span ></span>
<span ></span>
<span ></span>
<span ></span>
<span ></span>
<span ></span>
<span ></span>
        
    </footer>
    </>
  );
}

export default App;
