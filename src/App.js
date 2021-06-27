import React, {useState} from 'react';
import Question from './Question';
import questions from './data';


function App() {
    const [lists, setLists] = useState(questions);
    
    return (
        <div>
            {lists.map(list => {
                return (
                    <Question key={list.id} {...list}></Question>
                )
            })}
        </div>
    )
}


export default App