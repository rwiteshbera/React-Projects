import "./App.css"
import {FaGithubSquare } from 'react-icons/all';
import Review from "./Review";

function App () {
  return(
    <>
      <main>
        <section className="container">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
          <Review />
        </section>
      </main>
    </>
  )
}

export default App;
