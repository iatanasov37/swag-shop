import React, {Component} from 'react';
import './product.css';

class Product extends Component {

    render(){
        return(
            <div className='card'>
                <img className='card-img-top' alt='product'></img>
                <div className='card-body'>
                    <h4 className="card-title prodName">Patience</h4>
                    <p className="card-text price">Price: $</p>
                    <a href="http://localhost:3004/product/" className="btn btn-primary">Add to Wishlist</a>
                </div>
            </div>
        ); 
    }
}


export default Product;