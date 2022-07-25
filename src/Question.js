import React, { useState } from 'react'
import Data from "./Data";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const Question = () => {
    const [question,setQuestion] = useState(Data);
    const [showInfo,setShowInfo] = useState(false);
  return (
    <article>
        {
            question.map((item)=>{
                return(
                    <div className='content'>
                    <header key={item.id} className="title">
                        <h1>{item.title}</h1>
                        <button className='btn' onClick={() => setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus/>: <AiOutlinePlus/> }</button>
                    </header>
                    {showInfo && (<div>
                        <p>{item.info}</p>
                        <a href={item.html_url}>Look more about {item.title}</a>
                        </div>
                        )
                    }

                    </div>
                )
            })

        }
    </article>
  )
}

export default Question
 