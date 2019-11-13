import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import {CardList } from './components/card-list/card-list.Component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster:[]    };

  }
 //life cycle method
  componentDidMount(){
    // to get the json
     fetch(" https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monster:users}));


  }
  render() {
    return (
      <div className="App">
         <CardList monster={this.state.monster} >  {
        }</CardList >
      
      </div>
    );
  }
}

export default App;
