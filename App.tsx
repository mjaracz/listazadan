import React from 'react';

import {store} from './redux/store';
import {Provider} from 'react-redux';

import AppContainer from './components/AppContainer';

function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}

export default App;
