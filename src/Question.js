import React, {useState} from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
  const [loading, setLoading] = useState(false);

    return (
       <div>
             <header>
                 <h2>{title}</h2>
                 <button type="button" className="btn" onClick={() => setLoading(!loading)}>{loading ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
                 </header>
                    {
                      loading && <p>{info}</p>  
                    }
        </div>
       )
}


export default Question