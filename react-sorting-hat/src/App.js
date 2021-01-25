import React, {useState} from 'react';

import Greeting from './Components/Greeting';
import Form from './Components/Form';

import {Route} from 'react-router-dom';

import {hogwartsHouses} from './data';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({
    1: "",
    2: "",
    3: ""
  });

  //handleSelect to increment the count of the house value after an option is selected
  const handleSelect = (e) => {
    let index = e.target.name
    console.log(e.target.value)
    console.log(e.target.name)
    let newArray = formValues;
    newArray[index] = e.target.value;
    console.log(newArray)
    setFormValues(newArray)
    console.log(formValues, 'formvalues');
  };
  //handleSubmit will push the user to whichever house they're selected for
  
  return (
    <div className="App">
      <Route exact path="/">
        <Greeting />
      </Route>
      <Route path="/form">
        <Form handleSelect={handleSelect} formValues={formValues}/>
      </Route>
    </div>
  );
}

export default App;
