import List from "./List";
import Data from "./Data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button className="clear" onClick={() => setPeople([])}>Clear All</button>
      </section>
    </>
  )
}

export default App;