import React, {useState} from 'react';

import Greeting from './Components/Greeting';
import Form from './Components/Form';

import {Route} from 'react-router-dom';

import {hogwartsHouses} from './data';
import './App.css';



function App() {
  
  const [formValues, setFormValues] = useState({1: "", 2: "", 3: ""});
  const [userHouse, setUserHouse] = useState("");

  //handleSelect to increment the count of the house value after an option is selected
  // const handleSelect = (e) => {
  //   let index = e.target.name
  //   let newArray = formValues;
  //   newArray[index] = e.target.value;
  //   console.log(newArray, index, newArray[index], 'hereeeeeeee')
  //   setFormValues(newArray)
  //   console.log(formValues, 'formvalues');
  // };
  const handleSelect = e => {
    let inputName = e.target.name;
    let value = e.target.value;
    console.log('name:', inputName, 'value:', value)
    setFormValues({...formValues, [inputName]: value})
  }
  //findhouse determines what house the user belongs to and sets that house to state
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
    let highestVal = Object.keys(counter).reduce(function(a, b){ return counter[a] > counter[b] ? a : b });
    setUserHouse(highestVal)
    setFormValues({1: "", 2: "", 3: ""})
  };

  return (
    <div className="App">
      <Route exact path="/">
        <Greeting />
      </Route>
      <Route path="/form">
        <Form userHouse={userHouse} findHouse={findHouse} handleSelect={handleSelect} formValues={formValues}/>
      </Route>
    </div>
  );
}

export default App;
