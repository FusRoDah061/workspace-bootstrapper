import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/globals';

const App: React.FC = () => (
  <MemoryRouter>
    <GlobalStyles />
    <Routes />
  </MemoryRouter>
);

export default App;
