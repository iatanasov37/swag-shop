import React, {Component} from 'react';
import ProductCondensed from '../product-condensed/product-condensed';
import './wishlist.css';

class WishList extends Component {

    constructor(props){
        super(props);

        this.state = {wishList:[
            {
                title:"Mama jan",
                price: 23.99,
                _id:"sdlfkbzxcj2k3"
            },
            {
                title:"Lilitjan",
                price: 23.99,
                _id:"sdlfkj2dsadak3"
            },
            {
                title:"Ivan Jan",
                price: 23.99,
                _id:"sdldqedwfkj2k3"
            }
        ]}

        //Bind functions
        this.createWishList = this.createWishList.bind(this);

    }

    createWishList = () =>{
        const list = this.state.wishList.map((product) =>
        <ProductCondensed product={product} key={product._id} />
        );
        return (list);
    }
    
    render(){
        return(
            <div className="card wishlist">
                <div className="card-block">
                    <h4 className="card-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        ); 
    }
}

export default WishList;