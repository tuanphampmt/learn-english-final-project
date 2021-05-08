import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderChange extends Component {
    render() {
        return (
            <div id="header" className="header box-shadow" style={{backgroundColor: '#36becc'}}>
                <Link to="/changeAvatar" style={{width: '15%'}}>
                    <img className="box-shadow" src="Images\HomePage\Cat_avatar.png" style={{ width: '100%', borderRadius: '15px', backgroundColor: 'white'}} ></img>
                </Link>
                <label className="text-left">name</label>
                <ul className="text-center w-100" style={{listStyle: 'none', fontWeight: 'bold', fontStyle: 'italic'}}>
                    <li>Lv 1 </li>
                    <div className="progress ml-5 " style={{width: '80%'}}>
                        <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50"aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <li>50/100 exp</li>
                </ul>
                <Link to="/login" className="text-right box-shadow" style={{width: '13%', borderRadius: '12px'}}>
                    <img src="Images/HomePage/Logout_Icon.png" className="logout" style={{ width: '100%', backgroundColor:'white', borderRadius: '8px'}}></img>
                </Link>
        </div>
        );
    }
}

export default HeaderChange;