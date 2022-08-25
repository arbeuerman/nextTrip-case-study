import {fireEvent, render, screen} from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {

  it('renders without throwing an error', () => {
    expect(() => { render(<Home/>)}).not.toThrowError();
  });

  it('renders the title correctly', () => {
    render(<Home/>)
    const title = screen.getByTestId('home-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Home Page');
  })

})