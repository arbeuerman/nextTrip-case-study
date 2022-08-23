import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function Stops(props) {
  const params = useParams(); //{routeId, directionId}
  const [stops, setStops] = useState([]);

  const url = `https://svc.metrotransit.org/nextripv2/stops/${params.routeId}/${params.directionId}`;
  
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