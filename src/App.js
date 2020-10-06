import React from 'react';
import {Switch, Route} from "react-router-dom";

import "./base.scss"
import './App.css';

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/shop" component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
