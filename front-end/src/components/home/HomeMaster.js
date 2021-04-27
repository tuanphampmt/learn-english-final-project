import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeMaster extends Component {
    render() {
        return (
            <div className="home">
                <div className="cloud">
                    <img className="cloud1"  src="Images/Cloud.png" alt="" width="15%" ></img>
                    <img className="cloud2" src="Images/Cloud.png" alt="" width="15%" ></img>
                    <img className="cloud3" src="Images/Cloud.png" alt="" width="15%" ></img>
                    <img className="cloud4" src="Images/Cloud.png" alt="" width="10%" ></img>
                </div>
                <div id="logo">
                    <img src="Images/Logo_KIDE.png" alt="" width="55%" height="15%" />
                    <Link to="/login">
                      <img src="Images/Login_Button.png" alt="" className="btn_Login" width="13%" />
                    </Link>
                </div>
                <div className="play">
                    <Link>
                        <img src="Images/LetGo_Button.png" alt="" className="btn_LetGo" width="20%" />
                    </Link>
                </div>
            </div>   
        );
    }
}

export default HomeMaster;