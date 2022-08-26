import {fireEvent, render, screen, act} from '@testing-library/react';
import {getRoutes, getDirections, getStops} from './api';

describe('test api calls', () => {

  const mockResponse = {
    id: 1,
    label: 'label 1'
  }

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    })
  });
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calls get routes correctly', async () => {
    const routes = await getRoutes();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(routes).toBeTruthy();
  })

  it('calls get directions correctly', async () => {
    const directions = await getDirections();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(directions).toBeTruthy();
  })

  it('calls get stops correctly', async () => {
    const stops = await getStops();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(stops).toBeTruthy();
  })
})
