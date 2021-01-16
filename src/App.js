import React from 'react';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import Body from './components/body/Body';
import {PersistGate} from 'redux-persist/es/integration/react' 


const App = () => {
  return(
    <Provider store ={store}>
      <PersistGate persistor = {persistor}>
        <Body />
      </PersistGate>
    </Provider>
  )
}


export default App;
