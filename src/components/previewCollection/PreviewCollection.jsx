import React from "react";
import "./Preview.styles.scss";

const PreviewCollection = ({title, items}) => {
    console.log(items, title);
    return ( 
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.map(({id, name})=>(
                    <div key={id}>{name} </div>
                ))}
            </div>
        </div>
     );
}
 
export default PreviewCollection;