import React, { useState, useEffect } from 'react';

import Stops from './Stops';

function DirectionSelector(props) {

  const [directions, setDirections] = useState([]);
  const [directionId, setDirectionId] = useState('')

  const routeId = props.routeId;
  const url = `https://svc.metrotransit.org/nextripv2/directions/${routeId}`;
  
  const loadDirections = () => {
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
      setDirections(data);
    });
  }

  function handleDirectionChange(event) {
    const directionId = event.target.value;
    setDirectionId(directionId);
    // props.updateDirection(directionId);
  }

  useEffect(loadDirections, [url]);

  return(
    <>
      <select onChange={handleDirectionChange}>
        <option value={''} >
            Select a direction
        </option>
        {directions.map(direction => 
          {
            return <option key={direction.direction_id} value={direction.direction_id}>
                      {direction.direction_name}
                    </option>
          })
        }
      </select>
      {props.routeId && directionId ? <Stops routeId={props.routeId} directionId={directionId}/> : null}
    </>
    
  )
}

export default DirectionSelector;