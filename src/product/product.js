import React, {Component} from 'react';
import './product.css';
import DataService from '../services/data-service';
import NotificationService, {NOTIF_WISHLIST_CHANGED} from '../services/notification-service';

let ds = new DataService();
let ns = new NotificationService();

class Product extends Component {

    constructor(props){
        super(props)

        this.state = {onWishList: ds.itemOnWishList()};

        //Bind functions
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }
    
    componentDidMount() {
        console.log(this);
        ns.addObserver(NOTIF_WISHLIST_CHANGED,this,this.onWishListChanged);
    }

    componentWillUnmount(){
        ns.removeObserver(this,NOTIF_WISHLIST_CHANGED);
    }

    onWishListChanged(newWishlist) {
        this.setState({onWishList: ds.itemOnWishList(this.props.product)});
    }

    onButtonClicked = () =>{
        if (this.state.onWishList) {
            ds.removeWishListItem(this.props.product);
        } else {
            ds.addWishListItem(this.props.product);
        }
    }

    render(){

        var btnClass;

        if (this.state.onWishList) {
            btnClass = "btn btn-danger";
        } else {
            btnClass = "btn btn-primary";
        };

        return(
            <div className="card product">
                <img className='card-img-top' src={this.props.product.imgUrl} alt='product'></img>
                <div className='card-body'>
                    <h4 className="card-title prodName">{this.props.product.title}</h4>
                    <p className="card-text price">Price: {this.props.product.price}$</p>
                    <a href="#" onClick={()=> this.onButtonClicked()} className={btnClass}>{this.state.onWishList ? "Remove" : "Add to wishlist"}</a>
                </div>
            </div>
        ); 
    }
}


export default Product;