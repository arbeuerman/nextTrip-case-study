
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  }

  export async function getRoutes(){
    const url = 'https://svc.metrotransit.org/nextripv2/routes';
    const options = {
      method: 'GET',
      headers,
    };
    const response = await fetch(url, options);
    return await response.json();
  }
  
  export async function getDirections(routeId) {
    const url = `https://svc.metrotransit.org/nextripv2/directions/${routeId}`;
    const options = {
      method: 'GET',
      headers,
    };
    const response = await fetch(url, options);
    return await response.json();
  }

  export async function getStops(routeId, directionId) {
    const url = `https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}`;
    const options = {
      method: 'GET',
      headers,
    }
    const response = await fetch(url, options)
    return await response.json();
  }