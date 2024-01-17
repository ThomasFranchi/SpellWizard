

import { useState, useEffect } from "react";

function InputCpt(props) {


  function handleChange(event) {
    props.inputValue(event.target.value)
  }

  return (
    <div>
      <label>{props.label} </label>
      <input type="text" onChange={handleChange}></input>
    </div>)
}
export default InputCpt;