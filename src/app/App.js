import logo from './logo.svg';
import './App.css';
import HttpService from '../services/http-service';
import React, {Component} from 'react';


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
          <p>
            Edit <code>src/App.js</code> to create your swag shop.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}

export default App;
