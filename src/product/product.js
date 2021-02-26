import React, {Component} from 'react';
import './product.css';

class Product extends Component {

    render(){
        return(
            <div className="card product">
                <img className='card-img-top' src={this.props.imgUrl} alt='product'></img>
                <div className='card-body'>
                    <h4 className="card-title prodName">{this.props.title}</h4>
                    <p className="card-text price">Price: {this.props.price}$</p>
                    <a href="http://localhost:3004/product/" className="btn btn-primary">Add to Wishlist</a>
                </div>
            </div>
        ); 
    }
}


export default Product;