import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../home/Home';
class Main extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}

export default Main;