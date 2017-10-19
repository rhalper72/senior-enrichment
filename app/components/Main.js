import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


export default class Main extends Component {

    render () {
        return (
            <div>
                <h1>Welcome to the Interplanetary Academy of Javascript!</h1>
                <p>Please explore our website to learn more about our many wonderful campuses and students</p>
            </div>
        )
    }

}