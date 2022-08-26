import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import RouteSelector from './components/RouteSelector';
import Home from './components/Home';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        Next Trip
        <NavBar/>
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
