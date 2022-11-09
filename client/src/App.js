import './App.css';
import { Route, Switch} from 'react-router-dom'
import Breeds from './components/breeds';
import Breed from './components/breed';
import Order from './components/order';
import SearchBar from './components/SearchBar';
import  LandingPage  from './components/LandingPage';
import Paginado from './components/Paginado';

function App() {
  return (
   <div className="App">
   <Route path="/" component={LandingPage}> 
   <LandingPage/>
   </Route>
 <Switch>
    <Route exact path="/home" component={Breeds}>
      <SearchBar/>
      <Order/>
      
      <Breeds/>
    </Route>
 
  </Switch>
</div>
  );
}

export default App;
