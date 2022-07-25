import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const Question = ({title,info,html_url}) => {
    const [showInfo,setShowInfo] = useState(false);
  return (
    <div className='content'>
        <header className="title">
            <h1>{title}</h1>
            <button className='btn' onClick={() => setShowInfo(!showInfo)}> { showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/> }</button>
        </header>
        {showInfo && (<div>
            <p>{info}</p>
            <a href={html_url}>Look more about {title}</a>
            </div>
            )
        }

      </div>
  )
}

export default Question
 