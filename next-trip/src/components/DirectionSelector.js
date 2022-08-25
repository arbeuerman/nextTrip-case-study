import React, { useState, useEffect } from 'react';

import Stops from './Stops';
import { getDirections } from '../api';

function DirectionSelector(props) {

  const [directions, setDirections] = useState([]);
  const [directionId, setDirectionId] = useState('')

  const routeId = props.routeId;
  
  const loadDirections = () => {
    getDirections(routeId)
    .then((data) => {
      setDirections(data);
    })
    .catch((error) => {
      console.log('error: ', error);
    })
  }

  function handleDirectionChange(event) {
    const directionId = event.target.value;
    setDirectionId(directionId);
  }

  useEffect(loadDirections, [routeId]);

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