import './App.css';
import { Route, Switch} from 'react-router-dom'
import Breeds from './components/breeds';
import Breed from './components/breed';
import Order from './components/order';
import SearchBar from './components/SearchBar';
import  LandingPage  from './components/LandingPage';
import Paginado from './components/Paginado';
import { BreedCreate } from './components/BreedCreate';

function App() {
  return (
    <div className="App">
     <Switch>
          <Route exact path="/home" component={Breeds}>
             <SearchBar/>
             <Order/>
             <Breeds/>
          </Route>
          <Route path="/" component={LandingPage}> 
             <LandingPage/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
