import React, {Component} from 'react';
import DataService from '../services/data-service';
import './product-condensed.css';

let ds = new DataService();

class ProductCondensed extends Component {

    constructor(props){
        super(props);

        //Bind
        this.removeProduct = this.removeProduct.bind(this);
    }
    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }

    render(){
        return(
            <li className="list-group-item">
                <div className="row">
                    <p className="text-center col-9">{this.props.product.title} | ${this.props.product.price}</p>
                    <button type="button" className="btn btn-outline-danger col-3" onClick={()=>this.removeProduct()}>X</button>
                </div>

            </li>
        ); 
    }
}


export default ProductCondensed;