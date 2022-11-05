import React from "react";
export default function Breed({name, image}) {
    
    return (
               <div>
            <h3>{name}</h3>
        
        <img src={image} alt="img" width="200px" height="250px" />
               </div>
    );
}