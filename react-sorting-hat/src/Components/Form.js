//questions that will determine which house the user will be put into.
import React from 'react';
export default function Form({handleSelect, formValues}) {
    console.log(formValues)
    return (
        <form>
            <label> Which of the following do you value most?
                <select name={1} value={formValues[0]} onChange={(e) => handleSelect(e)}>
                    <option value="Griffindor">Bravery</option>
                    <option value="Hufflepuff">Dedication</option>
                    <option value="Ravenclaw">Intelligence</option>
                    <option value="Slytherin">Ambition</option>
                </select>
            </label>
            <label> Which element do you identify with most?
                <select name={2} value={formValues[1]} onChange={(e) => handleSelect(e)}>
                    <option value="Griffindor">Fire</option>
                    <option value="Hufflepuff">Earth</option>
                    <option value="Ravenclaw">Air</option>
                    <option value="Slytherin">Water</option>
                </select>
            </label>
            <label> Choose your favorite:
                <select name={3} value={formValues[2]} onChange={(e) => handleSelect(e)}>
                    <option value="Griffindor">Harry Potter</option>
                    <option value="Hufflepuff">Newt Scamander</option>
                    <option value="Ravenclaw">Luna Lovegood</option>
                    <option value="Slytherin">Draco Malfoy</option>
                </select>
            </label>
            <button>Submit</button> 
            {/* //when the form is submitted, we want the value of each option to be counted 
            so set the values to state........????*/}
        </form>
    )
}