import React, {useState, useEffect, useCallback} from 'react';

function Stops(props) {
  const {routeId, directionId} = props;
  const [stops, setStops] = useState([]);

  const url = `https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}`;
  
  const loadStops = () => {
    const options = {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log('data: ', data);
      setStops(data);
    });
  }

  useEffect(loadStops, [url]);

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