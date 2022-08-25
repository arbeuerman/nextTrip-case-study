import {fireEvent, render, screen} from '@testing-library/react';
import DirectionSelector from './DirectionSelector';

describe('Direction Selector Component', () => {

  it('renders without throwing an error', () => {
    expect(() => { render(<DirectionSelector/>)}).not.toThrowError();
  });

})