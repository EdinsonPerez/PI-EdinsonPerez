import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import  LandingPage  from './components/LandingPage';

function App() {
  return (
    // // <BrowserRouter>
    //   <div className="App">
    //   <h1>Dogs App</h1>
    //   {/* <LandingPage/>  */}
    //   <Breeds/>  
    // </div>
    // // </BrowserRouter>

<BrowserRouter>


<div className="App">
 <Switch>
   <Route exact path='/' component={LandingPage}/>
   <Route path='/home' component={Home}/>
 </Switch>
</div>

</BrowserRouter>


  );
}

export default App;
