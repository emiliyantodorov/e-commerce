import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.scss";

const MenuItem = ({id, title, imageUrl, linkUrl, history, match}) => {
    return (
        <div className="directory-menu__item" onClick={evt => history.push(`${match.url}${linkUrl}`)}>
            <div
                className="directory-menu__bg"
                style={{
                    background: `url(${imageUrl}) center/cover`
                }}
                key={id}
            >
            </div>
            <div className="directory-menu__item-content">
                <h2 className="heading-secondary directory-menu__item-title">{title}</h2>
                <span className="directory-menu__item-subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);