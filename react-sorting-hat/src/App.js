import React from 'react';

import Greeting from './Components/Greeting';
import {Route} from 'react-router-dom';

import {hogwartsHouses} from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Greeting />
      </Route>
    </div>
  );
}

export default App;
