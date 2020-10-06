import React from "react";
import {Link} from "react-router-dom";

import "./navigation.scss";

const Navigation = () => (
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
            </div>
        </div>
    </nav>
)

export default Navigation;