import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import { postBreed, getTemperaments } from '../store/actions';




// function validate(input) {
//     let errors ={};
//     if (!input.name) {
//         errors.name = 'Se requiere una Breed';
//      } else if (!input.height_min) {
//         errors.height_min = 'Altura debe ser completada'
//      }
//      return errors;
// };




export default function BreedCreate(){
    const dispatch = useDispatch()
    const history = useHistory()
    const temperaments = useSelector((state)=> state.temperaments)
    const [errors, setErrors] = useState({});

    const [input, setInput] = useState({
        name:"",
        height_min:"",
        height_max:"",
        weight_min:"",
        weight_max:"",
        life_span:"",
        temperament:[]
     })

function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
//         setErrors(validate({
//             ...input,
//             [e.target.name] : e.target.value
//         }));
        console.log(input)
}

function handleSelect(e){
    setInput({
       ...input,
       temperament: [...input.temperament,e.target.value]

    })
}
// function handleDelete(e){
//     setInput({
//        ...input,
//        temperaments: input.temperament.filter(temp => temp !== e)

//     })
// }



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
        temperament:[]

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
                {/* {errors.name && (
                    <p className='error'>{errors.name}</p>
                )} */}
            </div>
            <div>
                <label>Height_Min:</label>
                <input 
                type="text" 
                value= {input.height_min}
                name= "height_min"
                onChange={(e)=> handleChange(e)}
                />
                {/* {errors.height_min && (
                    <p className='error'>{errors.height_min}</p>
                    )} */}
            </div>
            <div>
                <label>Height_Max:</label>
                <input 
                type="text" 
                value= {input.height_max}
                name="height_max"
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
            {/* <div>
                <label>Imagen:</label>
                <input 
                type="text" 
                value= {input.image}
                name="image"
                onChange={(e)=> handleChange(e)}
                />
            </div> */}
                <select onChange={(e)=> handleSelect(e)}>
                    {temperaments.map((temp)=> (
                    <option value={temp.name}>{temp.name}</option>
                    ))}
                </select>
                <ul><li>{input.temperament.map(e => e + " ,")}</li></ul>
                <button type='submit'>Crear Breed</button>
        </form>
        {/* {input.temperament.map(el =>
            <div className='divTemp'> 
            <p>{el}</p>
            <button className="botonX" onClick={()=> handleDelete(el)}>x</button>
            </div> */}
                    
    {/* )} */}
</div>
)

}