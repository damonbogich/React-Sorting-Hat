//First thing that the user should see...
//Just ask user if they're ready to get started and redirect them to the form
import React from 'react';


export default function Greeting() {
    return (
        <div>
            <h2>Hello!  Click the button to get sorted!</h2>
            <button>Sort Me!</button>
        </div>
    )
}