import { useEffect, useState } from "react";
import InputDifficulty from "../Components/InputDifficulty"
import InputCpt from "../Components/InputCpt"
import { Link } from 'react-router-dom'

function Home() {

  const [list, setList] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [sortName, setSortName] = useState("");
  const [sortIngredient, setSortIngredient] = useState("");
  const [sortInventor, setSortInventor] = useState("");
  const [sortManufacturer, setManufacturer] = useState("");


  function handleClick() {
    getAll()
  }

  async function getAll() {
    const response = await fetch(`https://wizard-world-api.herokuapp.com/Elixirs?Difficulty=${difficulty}&Name=${sortName}&Ingredient=${sortIngredient}&InventorFullName=${sortInventor}&Manufacturer=${sortManufacturer}`);
    let data = await response.json();
    if (Array.isArray(data)) {
      setList(data);
    }
  }
  function handleDifficulty(event) {
    setDifficulty(event);
  }

  function handleName(event) {
    setSortName(event);
  }

  function handleIngredient(event) {
    setSortIngredient(event);
  }

  function handleInventor(event) {
    setSortInventor(event);
  }

  function handleManufacturer(event) {
    setManufacturer(event);
  }

  useEffect(() => {
    getAll()
  }, [difficulty, sortName, sortIngredient, sortInventor,sortManufacturer])

  return (
    <div>
      <button onClick={handleClick}>Chercher</button> <br /><br />

      <InputDifficulty difficulty={difficulty} handleDifficulty={handleDifficulty} /><br /><br />
      <InputCpt label="Nom" inputValue={handleName} />
      <InputCpt label="Ingrédient" inputValue={handleIngredient} />
      <InputCpt label="Inventeur" inputValue={handleInventor} />
      <InputCpt label="Manufacturer" inputValue={handleManufacturer} />
      {list != [] ? list.map((el) => <li key={el.id}> <Link to={`/sort/${el.id}`}>{el.name}</Link> </li>) : <p></p>}
    </div>
  )
}

export default Home;
