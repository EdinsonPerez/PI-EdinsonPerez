import './App.css';
import { Route, Switch} from 'react-router-dom'
import Breeds from './components/breeds';
import Breed from './components/breed';
import Order from './components/order';
import SearchBar from './components/SearchBar';
import  LandingPage  from './components/LandingPage';

function App() {
  return (
   <div className="App">
   <Route path="/" component={LandingPage}> 
   <LandingPage/>
   </Route>
 <Switch>
    <Route exact path="/home" component={Breed}>
      <SearchBar/>
      <Order/>
      <Breeds/>
    </Route>
 
  </Switch>
</div>
  );
}

export default App;
