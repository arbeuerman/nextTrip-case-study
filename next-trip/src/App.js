import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Home';
import RouteSelector from './RouteSelector';
import DirectionSelector from './DirectionSelector';
import Stops from './Stops';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        Next Trip
        <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/route-selector'>
              Select a route
            </Link>
          </li>
        </ul>
      </header>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/route-selector' element={<RouteSelector/>}>
            <Route path=':routeId' element={<DirectionSelector/>}>
              <Route path=':directionId' element={<Stops/>}/>  
            </Route>  
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
