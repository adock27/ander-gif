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
    <form className='d-flex' onSubmit={inputSubmit}>
      <input className='form-control  me-3' type="text" value={inputValue} onChange={inputDataChange} placeholder='Are you thinking in something?' required />
      <button className='btn btn-dark ' type="submit"> <i className="bi bi-search"></i> </button>
    </form>
  )
}

// pedir la funcion obligatoriamente 
AddCategory.propTypes = {
  setcategories: PropTypes.func.isRequired
};