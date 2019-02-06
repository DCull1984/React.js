import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import TraineeRatings from "./Trainee_Ratings";

const NavLinks = () => (
    <Router>
        <div>
            {/* <h2></h2> */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Trainee_Ratings">Trainee Ratings</Link></li>
                <li><Link to="/Trainers_Holidays">Trainers Holidays</Link></li>
                <li><Link to="/Trainers_Skills">Trainers Skills</Link></li>
                <li><Link to="/Trainee Schedule">Trainee Schedule</Link></li>
                <li><Link to="/Trainers_Subjects">Trainers Subjects</Link></li>
            </ul>
        </div>
    </Router>
);



export default NavLinks