import React, {useState} from 'react';
import Question from './Question';
import questions from './data';


function App() {
    const [lists, setLists] = useState(questions);
    
    return (
       <main>
           <div className="container">
               <h3>questions and answers about login</h3>
               <section className="info">
                  {lists.map(list => {
                      return (
                          <Question key={list.id} {...list}></Question>
                      )
                  })}
               </section>
           </div>
       </main>
    )
}


export default App