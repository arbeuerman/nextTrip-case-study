import {fireEvent, render, screen, act} from '@testing-library/react';
import RouteSelector from './RouteSelector';

describe('Route Selector Component', () => {

  it('renders without throwing an error', () => {
    expect(() => { render(<RouteSelector/>)}).not.toThrowError();
  });

  it('renders header correctly', () => {
    render(<RouteSelector />);
    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Where will you go next?');
  });

  it('renders select correctly', () => {
    render(<RouteSelector />);
    const select = screen.getByRole('combobox'); //https://www.w3.org/TR/html-aria/#docconformance
    expect(select).toBeInTheDocument();
    //check that the first option is correct
    expect(select.options[0]).toHaveTextContent('Select a route')
  });
});

describe('API call for routes functions correctly', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    // render(<RouteSelector/>);
  });

  it('calls the api once', () => {
    fetch.mockResponseOnce(JSON.stringify({ response : [
      { agency_id:0, route_id:"901", route_label:"METRO Blue Line" },
      { agency_id:0, route_id:"991", route_label:"Blue Line Bus" },
    ]}));
    act(() => { 
      render(<RouteSelector />);
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  })
})