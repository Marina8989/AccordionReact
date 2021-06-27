import React, {useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
  const [loading, setLoading] = useState(false);

    return (
       <article className="question">
          <header>
              <h4>{title}</h4>
              <button className="btn" onClick={() => setLoading(!loading)}>{loading ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
          </header>
          {loading && <p>{info}</p>}
       </article>
    )
}


export default Question