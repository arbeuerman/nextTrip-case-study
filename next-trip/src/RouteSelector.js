import React, { useEffect, useState} from 'react';

import DirectionSelector from './DirectionSelector';
import Stops from './Stops';

function RouteSelector() {
  //use state to store the routes
  const [routeId, setRouteId] = useState('');
  const [directionId, setDirectionId] = useState('');
  const [routes, setRoutes] = useState([]);

  //also going to need to make api calls to display route options
  const loadRoutes = () => {
    const url = 'https://svc.metrotransit.org/nextripv2/routes';
    const options = {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
    }
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      setRoutes(data)
    });
  }

  function updateDirection(directionId){
    setDirectionId(directionId);
  }

  function updateRoute(event) {
    const selectedRouteId = event.target.value;
    // setDirectionId('');
    setRouteId(selectedRouteId);
  }

  //load routes from api when component first renders
  useEffect(loadRoutes, []); //add empty array at the end so only calls the one time, onComponentDidMount
  
  return(
    <>
      <select onChange={updateRoute} value={routeId}>
        <option value={''} >
            Select a route
        </option>
        {routes.map(route => <option key={route.route_id} value={route.route_id}>{route.route_label}</option>) }
      </select>
      {routeId ? <DirectionSelector routeId={routeId} updateDirection={updateDirection} directionId={directionId}/> : null}
      {routeId && directionId ? <Stops routeId={routeId} directionId={directionId}/> : null}
    </>
  )
}

export default RouteSelector;