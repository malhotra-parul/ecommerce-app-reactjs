import React from "react";
import CollectionItem from "./../collection-items/CollectionItem";
import "./Preview.styles.scss";

const PreviewCollection = ({title, items}) => {
    console.log(items, title);
    return ( 
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, index)=> (index < 4))
                    .map(({id, ...otherItemProps})=>(
                    <CollectionItem key={id} {...otherItemProps}/>
                ))}
            </div>
        </div>
     );
}
 
export default PreviewCollection;