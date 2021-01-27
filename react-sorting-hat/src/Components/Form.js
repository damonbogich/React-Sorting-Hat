//questions that will determine which house the user will be put into.
import React from 'react';
import {Link} from 'react-router-dom';


export default function Form({userHouse, findHouse, handleSelect, formValues}) {
    if (userHouse === "") {
        return (
            <form>
                <label> Which of the following do you value most?
                    <select name={1} value={formValues[1]} onChange={(e) => handleSelect(e)}>
                        <option value="none">Choose One</option>
                        <option value="Gryffindor">Bravery</option>
                        <option value="Hufflepuff">Dedication</option>
                        <option value="Ravenclaw">Intelligence</option>
                        <option value="Slytherin">Ambition</option>
                    </select>
                </label>
                <label> Which element do you identify with most?
                    <select name={2} value={formValues[2]}  onChange={(e) => handleSelect(e)}>
                        <option value="none">Choose One</option>
                        <option value="Gryffindor">Fire</option>
                        <option value="Hufflepuff">Earth</option>
                        <option value="Ravenclaw">Air</option>
                        <option value="Slytherin">Water</option>
                    </select>
                </label>
                <label> Choose your favorite:
                    <select name={3} value={formValues[3]}  onChange={(e) => handleSelect(e)}>
                        <option value="none">Choose One</option>
                        <option value="Gryffindor">Harry Potter</option>
                        <option value="Hufflepuff">Newt Scamander</option>
                        <option value="Ravenclaw">Luna Lovegood</option>
                        <option value="Slytherin">Draco Malfoy</option>
                    </select>
                </label>
                <button onClick={(e) => findHouse(e)}>Find Your house</button>
                <button>Submit</button> 
            </form>
        )
    } else {
        return (
            <div>
                <h2>Congratulations, you have been accepted to {userHouse}!</h2>
                <p>Click the button for your house to learn about it!</p>
                <Link to="/house"><button>{userHouse}</button></Link> 
            </div>
        )
    }
}   