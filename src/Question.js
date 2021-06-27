import React, {useState} from 'react';
import questions from './data';

const Question = () => {
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState(questions);

    return (
        <div>
            {text.map(item => {
                const {id, title, info} = item;
                return (
                    <div key={id}>
                       <h4>{title}</h4>
                       <h5>{info}</h5>
                    </div>
                )
            })}
        </div>
    )
}


export default Question