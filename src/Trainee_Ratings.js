import React, { Component } from 'react';
import './App.css'

class TraineeRatings extends Component {
 render() {
  return (
   <div className="Trainee_Ratings">
    
    <header>
     <ul className="Page_Links">
      <li><a href="#Home">Home</a></li>
      <li><a class="active" href="./Trainee_Ratings.js">Trainee Rating</a></li>
      <li><a href="#Holiday">Trainers on Holiday</a></li>
      <li><a href="#TrainerSkills">Trainers Skills</a></li>
      <li><a href="#TraineeSchedule">Trainee Schedule</a></li>
      <li><a href="#TrainerSubject">Trainers Subject</a></li>
     </ul>
    </header>

    <h2>Java Ratings</h2>

     <table className="scoreTable">
      <h3>Rating Table</h3>
       <tr>
        <th>ID</th>
        <th>Trainee Name</th>
        <th>Ratings</th>
       </tr>

       <tr>
        <td>1</td>
        <td>Joe Doe</td>
        <td>8.5</td>
       </tr>

       <tr>
        <td>2</td>
        <td>Jane Doe</td>
        <td>3.0</td>
       </tr>

       <tr>
        <td>3</td>
        <td>John Doe</td>
        <td>10.0</td>
       </tr>
     </table>
     
     <button className="Collapse_Table">Hide Trainees</button>

     </div>
   );
 }
}

export default TraineeRatings;