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
  const [userHouse, setUserHouse] = useState("")

  //handleSelect to increment the count of the house value after an option is selected
  const handleSelect = (e) => {
    let index = e.target.name
    let newArray = formValues;
    newArray[index] = e.target.value;
    console.log(newArray)
    setFormValues(newArray)
    console.log(formValues, 'formvalues');
  };
  //handleSubmit will push the user to whichever house they're selected for
  const findHouse = (e) => {
    e.preventDefault();
    let counter = {Gryffindor: 0, Hufflepuff: 0, Ravenclaw: 0, Slytherin: 0,}
 
    let listOfValues = Object.values(formValues);

    listOfValues.forEach((item) => {
      if(item[0] === 'G') {
        counter.Gryffindor += 1
      }
      else if (item[0] === 'H') {
        counter.Hufflepuff += 1
      }
      else if (item[0] === 'R') {
        counter.Ravenclaw += 1
      }
      else if (item[0] === 'S') {
        counter.Slytherin += 1
      }
      return counter
    })
    console.log(counter, 'countercounter');
    let highestVal = Object.keys(counter).reduce(function(a, b){ return counter[a] > counter[b] ? a : b });
    console.log(highestVal, typeof(highestVal), 'highest value')
    setUserHouse(highestVal);
  }
  return (
    <div className="App">
      <Route exact path="/">
        <Greeting />
      </Route>
      <Route path="/form">
        <Form findHouse={findHouse} handleSelect={handleSelect} formValues={formValues}/>
      </Route>
    </div>
  );
}

export default App;
