import React from "react";
export default function Breed({name, image, temperament}) {
    
    return (
     <div>
      <h3>{name}</h3>
         <img src={image.url || image} alt="img" width="200px" height="250px" /> 
         <h5>{temperament}</h5>  
        </div> 
    );
}