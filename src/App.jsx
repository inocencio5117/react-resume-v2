import { React } from 'react';

import { MainContainer } from './components/MainContainer';

import { GlobalStyle } from './styles/GlobalStyles';
import { AppContainer } from './styles/AppContainer';

function App() {
  return (
    <AppContainer>
      <MainContainer />
      <GlobalStyle />
    </AppContainer>
  );
}

export default App;
