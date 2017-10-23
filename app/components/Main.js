import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//This is my default HOME page.
export default class Main extends Component {

    render () {
        return (
            <div>
                <h1>Welcome to the Academy of Action Heroes!</h1>
                <p>Want to save the world? The entire universe? Or just the day? Enroll at our premier academy today.</p>
                <p>Please explore our website to learn more about our many wonderful campuses and students</p>
                <img src="https://leaderonomics.com/wp-content/uploads/2014/10/10508532_ML-e1413439412357-700x470.jpg" />
            </div>
        )
    }

}