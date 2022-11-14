import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { postBreed, getTemperaments } from '../store/actions';



export default function BreedCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const temperaments = useSelector((state)=> state.temperaments)

    const [input, setInput] = useState({
        name:"",
        height_min:"",
        height_max:"",
        weight_min:"",
        weight_max:"",
        life_span:"",
        image:"",
        temperaments:[]
     })

function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
}

function handleSelect(e){
    setInput({
       ...input,
       temperaments: [...input.temperaments,e.target.value]

    })
}
function handleSubmit(e){
    e.preventDefault();
    console.log(input)
    dispatch(postBreed(input))
    alert("Breed creado!!!")
    setInput({
        name:"",
        height_min:"",
        height_max:"",
        weight_min:"",
        weight_max:"",
        life_span:"",
        image:"",
        temperaments:[]

    })
    history.push('/home')
}


useEffect(()=> {
    dispatch(getTemperaments());
},[]);


return(
<div>
        <Link to= '/home'><button>Volver</button></Link>
        <h1>Crear Breed</h1>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <div>
                <label>Nombre:</label>
                <input 
                type="text" 
                value= {input.name}
                name= "name"
                onChange={(e)=> handleChange(e)}
                />
            </div>
            <div>
                <label>Hight_Min:</label>
                <input 
                type="text" 
                value= {input.hight_min}
                name= "hight_min"
                onChange={(e)=> handleChange(e)}
                />
            </div>
            <div>
                <label>Hight_Max:</label>
                <input 
                type="text" 
                value= {input.hight_max}
                name="hight_max"
                onChange={(e)=> handleChange(e)}
                />
            </div>
            <div>
                <label>Weight_Min:</label>
                <input 
                type="text" 
                value= {input.weight_min}
                name="weight_min"
                onChange={(e)=> handleChange(e)}
                />
            </div>
            <div>
                <label>Weight_Max:</label>
                <input 
                type="text" 
                value= {input.weight_max}
                name="weight_max"
                onChange={(e)=> handleChange(e)}
                />
            </div>
            <div>
                <label>Life_Span:</label>
                <input 
                type="text" 
                value= {input.life_span}
                name="life_span"
                onChange={(e)=> handleChange(e)}
                />
            </div>
            <div>
                <label>Imagen:</label>
                <input 
                type="text" 
                value= {input.image}
                name="image"
                onChange={(e)=> handleChange(e)}
                />
            </div>
                <select onChange={handleSelect}>
                    {temperaments.map((temp)=> (
                    <option value={temp.name}>{temp.name}</option>
                    ))}
                </select>
                <ul><li>{input.temperaments.map(e => e + " ,")}</li></ul>
                <button type='submit'>Crear Breed</button>






        </form>




</div>
)


}