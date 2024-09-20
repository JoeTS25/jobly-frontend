import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './testUtils';

it("renders without crashing", function() {
  render(<BrowserRouter><UserProvider><App /></UserProvider></BrowserRouter>);
});
