import React, {Component} from "react";
import SHOP_DATA from "./shopData";

class ShopPage extends Component {
    state = { 
        collections: SHOP_DATA
     }
    render() { 
        return (
            <div>
                Shop Page!
            </div>  
            );
    }
}
 
export default ShopPage;