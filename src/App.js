import React, { Component } from 'react';
import './App.css';
import TraineeRatings from './Trainee_Ratings.js';


class App extends Component {
  render() {
	  return(
	
	<div>
		<header>
			<ul className="Page_Links">
				<li><a href="#Home">Home</a></li>
				<li><a href="./Trainee_Ratings.js">Trainee Rating</a></li>
				<li><a href="#Holiday">Trainers on Holiday</a></li>
				<li><a href="#TrainerSkills">Trainers Skills</a></li>
				<li><a href="#TraineeSchedule">Trainee Schedule</a></li>
				<li><a href="#TrainerSubject">Trainers Subject</a></li>
			</ul>
		</header>
		
		
		<TraineeRatings />
	</div>
		);
	}
}

export default App;
