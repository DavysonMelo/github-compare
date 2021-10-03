import React from 'react';
import Home from './pages/Home';
import '@clayui/css/lib/css/atlas.css';
import GlobalStyle from './styles/globalStyle';
import { ListContextProvider } from './contexts/listViewContext';

function App() {
  return (
    <ListContextProvider>
      <Home />
      <GlobalStyle />
    </ListContextProvider>
  );
}

export default App;
