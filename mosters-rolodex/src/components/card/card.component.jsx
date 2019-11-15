import React  from 'react';
import './card.style.css';
  

export const Card=(props)=>(
     <div className='card-container'>
         <img src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`} alt="monsters"/>
        <h1>{props.monster.name}</h1>
    </div>
)