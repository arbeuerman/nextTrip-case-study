import { render, screen } from '@testing-library/react';
import App from './App';


describe('App component', () => {
  
  it('renders App without error', () => {
    expect(() => { render(<App />) }).not.toThrowError();
  });
});
