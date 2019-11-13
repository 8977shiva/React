import React from 'react';
//importing css
import './card-list.style.css'

export const CardList=(props)=>{
return <div className='card-list'> { props.monster.map(monster=>(<h1 key={monster.id}>{monster.name}</h1>))
}</div>
     
}
