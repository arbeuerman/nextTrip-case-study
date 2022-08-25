import {fireEvent, render, screen} from '@testing-library/react';
import Stops from './Stops';

describe('Stops Component', () => {

  it('renders without throwing an error', () => {
    expect(() => { render(<Stops/>)}).not.toThrowError();
  });

})