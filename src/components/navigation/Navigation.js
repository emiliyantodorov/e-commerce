import React from "react";
import {Fragment} from "react";
import {Link} from "react-router-dom";

import {auth} from "../../firebase/firebase.utils"

import "./navigation.scss";

const Navigation = ({currentUser}) => (
    <nav className="main-navbar">
        <div className="container main-navbar-wrapper">
            <Link className="logo-box" to={"/"}>
                LOGO
            </Link>
            <div className="main-nav">
                <Link className="main-nav__link" to={"/shop"}>
                    SHOP
                </Link>
                <Link className="main-nav__link" to={"/shop"}>
                    CONTACTS
                </Link>
                {
                    currentUser ?
                        <Fragment>
                            <span className="main-nav__link">{currentUser.displayName}</span>
                            <span className="main-nav__link" onClick={() => auth.signOut()}>Sign Out</span>
                        </Fragment> :
                        <Link className="main-nav__link" to={"/sign-in"}>SIGN IN</Link>
                }
            </div>
        </div>
    </nav>
)

export default Navigation;