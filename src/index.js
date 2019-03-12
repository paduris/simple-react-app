import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Person(props) {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>Your Age: {props.age}</p>
        </div>
    );
}

var app = (
    <div>
        <Person name="Max" age="28" />
        <Person name="Manuuu" age="29" />
    </div>
);

ReactDOM.render(app, document.querySelector('#app'));



