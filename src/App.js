import React, { Component } from 'react';
import './App.css';
import TraineeRatings from './Trainee_Ratings.js';
import NavLinks from "./Nav.js";

class App extends Component {
 render() {
  return(

   <div>
       <NavLinks />
    <TraineeRatings />
   </div>
   
  );
 }
}

export default App;
