import React from 'react'
import LanguageContext from '../contexts/LanguageContext';

const Field = () => {

  function renderText(value){
    return value==='english'? 'Name':'Naam'
  }

  return (
    <div className='ui field'>
        <label>
        <LanguageContext.Consumer>
          {value=>renderText(value)}
        </LanguageContext.Consumer>
        </label>
        <input type="text" />
    </div>
  )
}

export default Field;
