

import { useState, useEffect} from "react";
function InputDifficulty(props) {


function handleChange(event) {
  props.handleDifficulty(event.target.value)
}

    return (
        <select name="Difficulty" id="difficulty-select" onChange={handleChange}>
        <option value="">--Veuillez choisir une difficulté--</option>
        <option value="Unknown">Unknown</option>      
        <option value="Advanced">Advanced</option>        
        <option value="Moderate">Moderate</option>
        <option value="Beginner">Beginner</option> 
        <option value="OrdinaryWizardingLevel">OrdinaryWizardingLevel</option>
        <option value="OneOfAKind">OneOfAKind</option>      
      </select>
    )
}
export default InputDifficulty;