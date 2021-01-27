//First thing that the user should see...
//Just ask user if they're ready to get started and redirect them to the form
import React from 'react';
import {Link} from 'react-router-dom';

export default function Greeting() {
    return (
        <div>
            <h2>Hello!  Click the button to get sorted!</h2>
            <Link to="/form"><button>Sort Me!</button></Link>
        </div>
    )
}