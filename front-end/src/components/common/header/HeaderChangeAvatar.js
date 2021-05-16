import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Auth from "../../service/Auth";

class HeaderChange extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: Auth.getCurrentUser(),
        };
    }

    render() {
        const {currentUser} = this.state;
        return (
            <div id="header" className="header" style={{backgroundColor: '#36becc'}}>
                <Link to="/change-avatar" style={{width: '15%', marginRight: "15px"}}>
                    <img
                        src={currentUser.avatar === "AVATAR_CAT" ? "Images/HomePage/Cat_avatar.png" : currentUser.avatar === "AVATAR_DINOSAUR"
                            ? "Images/HomePage/Dinosaur_avatar.png" : "Images/HomePage/Dolphin_avatar.png"}
                        style={{width: '100%', borderRadius: '15px', backgroundColor: 'white'}} id="avatar"/>
                </Link>
                <label className="text-left">{currentUser.username}</label>
                <ul className="text-center w-100" style={{listStyle: 'none', fontWeight: 'bold', fontStyle: 'italic'}}>
                    <li>Lv 1</li>
                    <div className="progress ml-5 " style={{width: '80%'}}>
                        <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}}
                             aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                    </div>
                    <li>50/100 exp</li>
                </ul>
                <Link to="/login" className="text-right box-shadow" style={{width: '13%', borderRadius: '12px'}}>
                    <img src="Images/HomePage/Logout_Icon.png"
                         className="logout"
                         style={{width: '100%', backgroundColor: 'white', borderRadius: '8px'}}/>
                </Link>
            </div>
        );
    }
}

export default HeaderChange;