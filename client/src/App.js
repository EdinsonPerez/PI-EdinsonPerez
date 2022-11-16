import './App.css';
import { Route, Switch} from 'react-router-dom'
import Breeds from './components/breeds';
import Breed from './components/breed';
import Order from './components/order';
import SearchBar from './components/SearchBar';
import  LandingPage  from './components/LandingPage';
import BreedCreate  from './components/BreedCreate';
import BreedDetail from './components/BreedDetail';

function App() {
  return (
    <div className="App" >
     <Switch>
          <Route exact path="/" component={LandingPage}> 
             <LandingPage/>
          </Route>
          <Route exact path="/home" component={Breeds}>
             <SearchBar/>
             <Order/>
             <Breeds/>
          </Route>
          <Route exact path="/breeds" component={BreedCreate}> 
             <BreedCreate/>
          </Route>
          <Route exact path="/breeds/:id" component={BreedDetail}> 
             <BreedDetail/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
