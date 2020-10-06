import React from "react";

import "./collection-preview.scss"

import Section from "../Section/Section";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({title, items}) => (
    <Section cName={`section-preview section-preview--${title}`}>
        <h2 className="heading-secondary">{title}</h2>
        <div className="collection-preview-wrapper">
            {
                items
                    .slice(0, 4)
                    .map(({id, name, price, imageUrl}) => <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl}/>)
            }
        </div>
    </Section>
)

export default CollectionPreview;