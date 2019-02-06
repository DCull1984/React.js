import React from "react";
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import TraineeRatings from "./Trainee_Ratings";
import Home from "./Home.js"

const NavLinks = () => (
    <Router>
        <div className="NavBar">
            <ul>
                <li className="active">
                <NavLink exact to="/">Home</NavLink></li>
                
                <li className="active">
                <NavLink to="/dashboard">Dashboard</NavLink></li>
            
                <li className="active">
                <NavLink to="/trainers">Trainers</NavLink></li>
            </ul>

            <hr />
            <Route exact path ="/" component={HomePage}/>
            <Route path ="/dashboard" component={Dashboard}/>
            <Route path = "/trainers" component={Trainer}/>

        </div>
    </Router>
);

const HomePage = () => <Home />;

const Dashboard = () => 
    <div>
        <h2>Welcome to the Dashboard!!</h2>
        <ul>
            <li>
              <NavLink to="/Trainee_Ratings">Trainee Ratings</NavLink></li>
            <li>
              <NavLink to="/Trainee Schedule">Trainee Schedule</NavLink></li>
        </ul> 
        
        <Route path ="/Trainee_Ratings" component={Ratings}/>
        {/* <Route path ="/Trainee_Schedule" component={TraineeSchedule}/> */}
    </div>;


const Trainer = () => 
    <div>
        <h2>Welcome to the Trainer Listing</h2>
        <ul>
            <li>
                <NavLink to="/Trainers_Holidays">Trainers Holidays</NavLink></li>
            <li>
                <NavLink to="/Trainers_Skills">Trainers Skills</NavLink></li>
            <li>
                <NavLink to="/Trainers_Subjects">Trainers Subjects</NavLink></li> 
        </ul>
            
        {/* <Route path="/Trainers_Holidays" component={TrainerHoliday}/>
        <Route path="/Trainers_Skills" component={TrainerSkills}/>
        <Route path="/Trainer_Subjects" component={TrainerSubjects}/> */}
    </div>;


const Ratings = () => <TraineeRatings />;


export default NavLinks;