import { useState } from "react";
import data from "./data";


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const onChangeAmount = (e) => {
    setCount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const generateLorem = (e) => {
    if (count <= 10) {
      setText(data.slice(0, count));
    }
    else if (count > 10){
      setText(data.slice(0, 11));
    }
  }

  return (
    <>
      <section className="container">
        <div className="title">
          Tired Of Boring Lorem Ipsum
        </div>
        <form className="input-container" onSubmit={handleSubmit}>
          <label htmlFor="amount">Paragraph</label>
          <input type="number" onChange={onChangeAmount} value={count} />
          <button
            type="submit"
            className="btn" onClick={generateLorem}>Generate
          </button>

        </form>

        <article className="lorem-text">
          {
            text.map((item, index) => {
              return ( 
                  <p key={index}>{item}</p>
            )})
          }
        </article>
      </section>
    </>
  )
}

export default App;