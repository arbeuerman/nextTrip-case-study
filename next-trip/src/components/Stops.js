import React, {useState, useEffect} from 'react';

import { getStops } from '../api';

function Stops(props) {
  const {routeId, directionId} = props;
  const [stops, setStops] = useState([]);

  
  const loadStops = () => {
    getStops(routeId, directionId)
    .then((data) => {
      setStops(data);
    });
  }

  useEffect(loadStops, [routeId, directionId]);

  return(
    <ul>
      {stops.map(stop => 
        {
          return <li key={stop.place_code}>{stop.description}</li>
        })
      }
    </ul>
  )
}

export default Stops;