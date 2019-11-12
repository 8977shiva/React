import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [{name:'frankenstein',id:'1'},{name:'dracula', id:'2'},{name:'Zombie', id:'3'}]
    };
  }

  render() {
    return (
      <div className="App">
        {
  this.state.monster.map(monster=>(<h1 key={monster.id}>{monster.name}</h1>))
        }
      </div>
    );
  }
}

export default App;
