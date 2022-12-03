import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setcategories }) => {


  // Dar el valor al value del input 
  const [inputValue, setinputValue] = useState("");


  // obtner el cambio del form 
  const inputDataChange = (e) => {
    // console.log(e.target.value)
    setinputValue(e.target.value)
  }


  // obtener el submit 
  const inputSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setcategories(cats => [inputValue, ...cats])
      setinputValue("")
    }
  }

  // TODO - Agregar los proptypes

  return (
    <form onSubmit={inputSubmit}>
      <input type="text" value={inputValue} onChange={inputDataChange} />
    </form>
  )
}

// pedir la funcion obligatoriamente 
AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired
};