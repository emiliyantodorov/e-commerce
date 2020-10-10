import React from 'react';
import {Switch, Route} from "react-router-dom";

import "./base.scss"
import './App.css';

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shopPage/ShopPage";
import Navigation from "./components/navigation/Navigation";
import SignInPage from "./pages/sign-in-page/signInPage";

import {auth} from "./firebase/firebase.utils";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user => {
            console.log(user);
            this.setState({currentUser: user})
        }))
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Navigation currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/shop" component={ShopPage}/>
                    <Route exact path="/sign-in" component={SignInPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
