import { React } from 'react';

import { Provider } from 'react-redux';
import { store } from './store';
import { MainContainer } from './components/MainContainer';

import { GlobalStyle } from './styles/GlobalStyles';
import { AppContainer } from './styles/AppContainer';

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <MainContainer />
        <GlobalStyle />
      </AppContainer>
    </Provider>
  );
}

export default App;
