import React from "react";

import previewCollectionsData from "./preview-collections-data";

import CollectionPreview from "../../components/collection-preview/CollectionPreview";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            previewCollections: previewCollectionsData
        }
    }

    render() {
        return (
            <div className="shop-page">
                {this.state.previewCollections.map(({id, title, items}) => (
                    <CollectionPreview
                        key={id}
                        title={title}
                        items={items}
                    />
                ))}
            </div>
        )
    }
}

export default ShopPage;