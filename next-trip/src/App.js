import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import RouteSelector from './components/RouteSelector';
import Home from './components/Home';
// next-trip/src/components/Stops.js

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
          <Route exact path='/route-selector' element={<RouteSelector/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
