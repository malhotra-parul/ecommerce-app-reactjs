import React, {Component} from "react";
import SHOP_DATA from "./shopData";
import PreviewCollection from "../../components/previewCollection/PreviewCollection";

class ShopPage extends Component {
    state = { 
        collections: SHOP_DATA
     }
    render() { 
        const {collections} = this.state;
        return (
            <div className="shop-page">
            {
                collections.map( ({id, ...otherProps}) =>  <PreviewCollection key={id} {...otherProps}/> )
            }
            </div>  
            );
    }
}
 
export default ShopPage;