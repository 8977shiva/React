import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import {CardList } from './components/card-list/card-list.Component'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters:[],
       searchField :''  
     };

  }
 //life cycle method
  componentDidMount(){
    // to get the json
     fetch(" https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({monsters :users}));


  }
  render() {
    return (
      <div className="App">
        <input type='search'  placeholder='search'  
         onChange={e=>this.setState({searchField:e.target.value})} />
         <CardList monsters={this.state.monsters}/>     
          
      
      </div>
    );
  }
}

export default App;
