import React from 'react';
import SignIn from '../src/pages/SignIn'
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
  return (
      <Provider store={store}>
        <SignIn/>
      </Provider>
  );
}

export default App;
