import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Breeds from './components/breeds';
import  LandingPage  from './components/LandingPage';

function App() {
  return (
   
<BrowserRouter>
<div className="App">
 <Switch>
    <Route exact path='/' component={LandingPage}/> 
   <Route path='/home' component={Breeds}/>
 </Switch>
</div>
</BrowserRouter>




  );
}

export default App;
