import React, { Component } from 'react';


class TraineeRatings extends Component {
  render() {
    return (
      <div className="Trainee_Ratings">
        <table>
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
      </div>
    );
  }
}

export default TraineeRatings;
