import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import {CardList } from './components/card-list/card-list.Component'
import  { SearchBox} from './components/search-box/search-box'
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
    const {monsters, searchField} =this.state;
     const filterMonsters=monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())) ; 
       return (
      <div className="App">
        <h1> Cats</h1>
      <SearchBox  placeholder="cats" handelChange={e=>{
        this.setState({searchField:e.target.value});
        
      }}/>
         <CardList monsters={filterMonsters}/>     
            </div>
    );    
  }
}

export default App;
