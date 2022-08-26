import React, { useEffect, useState} from 'react';

import DirectionSelector from './DirectionSelector';
import { getRoutes } from '../api';


function RouteSelector() {
  //use state to store the routes
  const [routeId, setRouteId] = useState('');
  const [routes, setRoutes] = useState([]);

  //make api call to display route options
  const loadRoutes = () => {
    getRoutes()
    .then((data) => {
      setRoutes(data);
    })
    .catch((error) => {
      console.log('error: ', error);
    })
  }

  function updateRoute(event) {
    const selectedRouteId = event.target.value;
    setRouteId(selectedRouteId);
  }

  //load routes from api when component first renders
  useEffect(loadRoutes, []); //add empty array at the end so only calls the one time, onComponentDidMount
  
  return(
    <>
    <h1>Where will you go next?</h1>
      <select onChange={updateRoute} value={routeId}>
        <option value={''} >
            Select a route
        </option>
        {routes.map(route => <option key={route.route_id} value={route.route_id}>{route.route_label}</option>) }
      </select>
      {routeId ? <DirectionSelector routeId={routeId} /> : null}
    </>
  )
}

export default RouteSelector;