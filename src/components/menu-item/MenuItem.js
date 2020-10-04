import React from "react";
import "./menu-item.scss";

const MenuItem = ({id, title, imageUrl}) => {
    return (
        <div className="directory-menu__item">
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

export default MenuItem;