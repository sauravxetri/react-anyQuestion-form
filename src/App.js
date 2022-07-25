import React, { useState } from "react";
import Data from "./Data";
import Question from "./Question";

function App() {
  const [question,setQuestion] = useState(Data);
  return (
    <main className="container">
      <section className="sidebar">
        <h2>questions and answers about login</h2>
      </section>
      <div>
        {
          question.map((item) => {
            return(
              <Question key ={item.id} {...item}/>
            )
          })
        }
      </div>
    </main>
  );
}

export default App;
