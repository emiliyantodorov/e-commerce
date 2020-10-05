import React from 'react';
import {Switch, Route} from "react-router-dom";

import "./base.scss"
import './App.css';

import HomePage from "./pages/homepage/HomePage";

const AboutUsPage = () => {
    return (
        <div><h1>About Us</h1></div>
    )
}

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/shop/hats" component={AboutUsPage}/>
            </Switch>
        </div>
    );
}

export default App;
