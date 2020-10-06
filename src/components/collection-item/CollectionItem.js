import React from "react";
import "./collection-item.scss";

const CollectionItem = ({name, price, imageUrl}) => (
    <div className="collection-item">
        <div
            className="collection-item__body"
            style={{
                background: `url(${imageUrl}) center/cover`
            }}
        >
            <button className="cta cta--add-to-cart">ADD TO CART</button>
        </div>
        <div className="collection-item__footer">
            <span className="collection-item__name">{name}</span>
            <span className="collection-item__price">${price}</span>
        </div>
    </div>
)

export default CollectionItem;

