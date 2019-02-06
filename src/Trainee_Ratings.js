import React from 'react';
import './App.css';

const TraineeRatings = () => (
 

   <div className="Trainee_Ratings">

    <div className="Page_Name">
      <h2>Java Ratings</h2>
    </div>

  <div className="Rating_Table">

     <table className="scoreTable">

      <h3>Rating Table</h3>
       <tbody id="Table_Body">

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

       </tbody>
     </table>

    </div>

   </div>
);


export default TraineeRatings;