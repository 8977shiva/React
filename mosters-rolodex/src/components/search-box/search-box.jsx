import React from 'react';

import './search-box.css';

export const SearchBox =({placeholder, handelChange })=>{
  return(<div>
 <input type="search" placeholder={placeholder}  onChange={handelChange} className='search'   />
 </div>)
}