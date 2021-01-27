import React from 'react';
import {Link} from 'react-router-dom';
import {hogwartsHouses} from '../data';

export default function House({userHouse}) {
    //find which house will be used:
    let house;
    hogwartsHouses.forEach(item => {
        if(item.name === userHouse) {
            house = item;
        }
    });
    console.log(house, 'house variable')

    if (userHouse === "") {
        return (
            <div>
                <h1>You have not been sorted yet!</h1>
                <p>Click the button to go back and get sorted</p>
                <Link to="/form"><button>Get Me Sorted!</button></Link>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2>Hi Wizard!  Congrats on being selected to {house.name}</h2>
                <h3>Founder: {house.founder}</h3>
                <h2>Famous Alumni:</h2>
                <ul>
                    {house.famousMembers.map((wizard, index) => {
                        return <li key={index}>{wizard}</li>
                    })}
                </ul>
            </div>
        )
    }
    
};