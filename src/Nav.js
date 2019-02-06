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

               {/*  <li className="active">
                <NavLink to="/Trainee_Ratings.js">Trainee Ratings</NavLink></li>

                <li className="active">
                <NavLink to="/Trainers_Holidays">Trainers Holidays</NavLink></li>

                <li className="active">
                <NavLink to="/Trainers_Skills">Trainers Skills</NavLink></li>

                <li className="active">
                <NavLink to="/Trainee Schedule">Trainee Schedule</NavLink></li>

                <li className="active">
                <NavLink to="/Trainers_Subjects">Trainers Subjects</NavLink></li> */}

                <li><Link to="/detailList">DL</Link></li>
            </ul>

            <hr />
            <Route exact path ="/" component={HomePage}/>
            {/* <Route Path="./Trainer_Skills" component={TraineeRatings}/> */}
            <Route path ="/detailList" component={deatilList}/>

        </div>
    </Router>
);

const HomePage = () => <Home />;

const deatilList = ({match}) => 
    <div>
        <h2>Listings</h2>
        {/* <ul>
            <li><Link to={`${match.url}/Trainee_Ratings`}>Trainee Ratings</Link></li>
            <li><Link to="/Trainers_Holidays">Trainer_Holidays</Link></li>
            <li><Link to="/Trainers Skills">Trainer Skills</Link></li>
            <li><Link to="Trainers_Subjects">Trainer Subjects</Link></li>
        </ul> */}
    </div>
;


export default NavLinks;