import React, {Component} from 'react';
import SHOP_DATA from "./Shop.data";
import Preview from "../../components/preview-collection/preview";
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {

        console.log(this.state.collections);
        return (
            <div className='shop-page'>
                {
                this.state.collections.map(({ id, ...otherCollectionProps })=>(
                    <Preview key={id} {...otherCollectionProps}  />
                ))
            }
            </div>
        );
    }
}

export default Shop;