import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Sorts() {


    useEffect(() => {
        {
            getSortById(id)
        }

    }, [])



    const [sorts, setSorts] = useState([]);
    let { id } = useParams();
    async function getSortById(id) {
        const response = await fetch(`https://wizard-world-api.herokuapp.com/Elixirs/${id}`);
        let data = await response.json();
        console.log(data)
        setSorts(data);
        console.log(data.ingredients)
    }

    // useEffect(() => {
    // }  , [sorts])


    return (

        <div>
            <p>Parchemin du Sort</p>
            {/* { sorts.name ? <p>{sorts.name}</p> : <p></p>}  */}
            {sorts.name ?<p>Nom : {sorts.name}</p> : null }
            {sorts.effect ? <p>Effets : {sorts.effect}</p>  : null }
            {sorts.sideEffects ? <p>Effets de bord : {sorts.sideEffects}</p> : null}
            {sorts.characteristics ? <p>Caractéristiques : {sorts.characteristics}</p> : null}
            {sorts.time ? <p>temps : {sorts.time}</p> : null}
            <p>difficulté : {sorts.difficulty}</p>
            {sorts.ingredients?.length > 0 ?
                <div> <p>Ingrédients :</p>
                    <ul>
                        {sorts.ingredients?.map((el) => <li key={el.id}>{el.name}</li>)}
                    </ul>
                </div> : null}
             {sorts.inventors?.length > 0 ? <p> inventors :   {sorts.inventors?.map((el) => <li key={el.id}>{el.firstName} {el.lastName} </li>)} </p> : null}
             {sorts.manufacturer ? <p> manufacturer : {sorts.manufacturer ? sorts.manufacturer : <span>Inconnu</span>} </p> : null}
        </div>
    )
}

export default Sorts;

