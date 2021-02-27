import React, {Component} from 'react';
import './product.css';
import DataService from '../services/data-service'

let ds = new DataService();

class Product extends Component {

    constructor(props){
        super(props)

        //Bind functions
        this.onButtonClicked = this.onButtonClicked.bind(this);


    }

    onButtonClicked = () =>{
        ds.addWishListItem(this.props.product);
    }

    render(){
        return(
            <div className="card product">
                <img className='card-img-top' src={this.props.product.imgUrl} alt='product'></img>
                <div className='card-body'>
                    <h4 className="card-title prodName">{this.props.product.title}</h4>
                    <p className="card-text price">Price: {this.props.product.price}$</p>
                    <a href="#" onClick={()=> this.onButtonClicked()} className="btn btn-primary">Add to Wishlist</a>
                </div>
            </div>
        ); 
    }
}


export default Product;