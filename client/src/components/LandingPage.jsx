import React from 'react';
import { useHistory }  from 'react-router-dom'

export default function LandingPage() {
    const history = useHistory()
return(
<div>
   <h1>Bienvenidos pagina Dogs</h1>
   <button onClick={() => history.push('/home')}>
          Enter
        </button>
        <h2>Henry PI APP</h2>
</div>
)
}



