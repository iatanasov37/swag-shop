import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import React, {Component} from 'react';

//Components
import Product from '../product/product';
import WishList from '../wishlist/wishlist';





//Services
const http = new HttpService();


class App  extends Component {
  
  constructor(props){
    super(props);
    this.state = {products:[]};

    //Bind functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);

    this.loadData();
    
    
    

  }



  loadData = () => {
    // Can't access this inside of a promise. Creating an outer reference to it with "var self = this;"
    // Do every time when you see .then 
    var self = this;
    http.getProducts().then(data => {
      self.setState({products: data});
    }, err => {
      console.log("error");
    });
  }
  
  productList = () => {
    const list = this.state.products.map((product) => 
      <div className="col-sm-4" key={product._id}>
        <Product product={product} />
      </div>
    );
    return (list);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-main container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">
                {this.productList()};
              </div>
            </div>
            <div className="col-sm-4">
              <WishList />
            </div>
            
          </div>
        </div>
      </div>
    );
  }

}

export default App;
