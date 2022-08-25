import {fireEvent, render, screen} from '@testing-library/react';
import RouteSelector from './RouteSelector';

describe('Route Selector Component', () => {

  it('renders without throwing an error', () => {
    expect(() => { render(<RouteSelector/>)}).not.toThrowError();
  });

})