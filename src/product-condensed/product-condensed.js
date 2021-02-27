import React, {Component} from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {

    render(){
        return(
            <li className="list-group-item">
                <div className="row">
                    <p className="text-center col-9">{this.props.product.title} | ${this.props.product.price}</p>
                    <button type="button" className="btn btn-outline-danger col-3">X</button>
                </div>

            </li>
        ); 
    }
}


export default ProductCondensed;