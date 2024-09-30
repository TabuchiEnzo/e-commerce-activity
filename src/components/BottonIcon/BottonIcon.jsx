import style from './BottonIcon.module.css'
import React, { useState } from 'react';

function Bottonicon({srcIcon, desc}){

    const [color] = useState('black')
    const [background] = useState('white')
    
    return(
        <div className={style.botton} style={{backgroundColor: background, color:color}}>
            <img src={srcIcon}></img>
            <p>{desc}</p>
        </div>
    )
}

export default Bottonicon