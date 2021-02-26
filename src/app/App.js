import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import React, {Component} from 'react';
import Product from '../product/product';


const http = new HttpService();

// function App() {

class App  extends Component {
  
  constructor(props){
    super(props);
    this.loadData = this.loadData.bind(this);
    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(data => {
      console.log(data);
    }, err => {
      console.log("error");
    });
  }
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-main">
          <Product />
        </div>
      </div>
    );
  }

}

export default App;
