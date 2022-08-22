import React, { useState, useEffect } from 'react';

function DirectionSelector(props) {

  const [directions, setDirections] = useState([]);
  console.log('route: ', props.routeId);
  const routeId = props.routeId;

  const url = `https://svc.metrotransit.org/nextripv2/directions/${routeId}`;
  
  const loadDirections = () => {
    const options = {
      method: 'GET',
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        'Access-Control-Allow-Origin': '*', 
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
    }
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log('data: ', data);
      setDirections(data);
    });
  }

  useEffect(loadDirections, [url]);

  return(
    <select>
      {directions.map(direction => 
        {
          return <option key={direction.direction_id}>{direction.direction_name}</option>
        })
      }
    </select>
  )
}

export default DirectionSelector;