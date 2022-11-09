import React from 'react'


export default function Paginado ({charactersPerPage, breeds,paginado}){
const pageNumbers = []

for (let i = 0; i < Math.ceil(breeds/charactersPerPage); i++){
    pageNumbers.push(i+1)
}
return(
<nav>
    <ol className='paginado'>
        { pageNumbers  &&
        pageNumbers.map(number => (
        <ol className='number' key={number}>
        <a onClick={() => paginado(number)}>{number}</a>
        </ol>
))}
</ol>
    </nav>
)
}
