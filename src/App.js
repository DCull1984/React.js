import React, { Component } from 'react';
import './App.css';
import NavLinks from "./Nav.js";

class App extends Component {
constructor(){
    super();
    this.state={name:"react"};
}
    render() {
  return(

   <div>
    <NavLinks />
    
   </div>

  );
 }
}

export default App;