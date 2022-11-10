import React from "react";
export default function Breed({name, image, temperament, breed_group}) {
    
    return (
     <div>
      <h3>{name}</h3>
         <img src={image.url || image} alt="img" width="200px" height="250px" /> 
         <h5>{temperament}</h5> 
         <h5>{breed_group}</h5> 
        </div> 
    );
}