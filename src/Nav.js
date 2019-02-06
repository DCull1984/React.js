import React from "react";
import {BrowserRouter as Router, NavLink} from "react-router-dom";

const NavLinks = () => (
    <Router>
        <div className="NavBar">
            <ul>
                <li className="active">
                <NavLink exact to="/">Home</NavLink></li>

                <li className="active">
                <NavLink to="/Trainee_Ratings">Trainee Ratings</NavLink></li>

                <li className="active">
                <NavLink to="/Trainers_Holidays">Trainers Holidays</NavLink></li>

                <li className="active">
                <NavLink to="/Trainers_Skills">Trainers Skills</NavLink></li>

                <li className="active">
                <NavLink to="/Trainee Schedule">Trainee Schedule</NavLink></li>

                <li className="active">
                <NavLink to="/Trainers_Subjects">Trainers Subjects</NavLink></li>
            </ul>

        </div>
    </Router>
);

export default NavLinks;