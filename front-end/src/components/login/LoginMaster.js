import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LoginMaster extends Component {
    render() {
        return (
            <div>
                <div className="formlogin center">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="username" name="username" className="text box"/>
                    </div> 
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="text box"/>
                    </div>
                    <div className="form-group button_login">
                        <img style={{ width: '70%', height: '80%'}} className="button_login" src="Images/Login_Button_Click.png"></img>
                    </div>
                </div>
                <div>
                    <Link to="/home">
                         <img src="Images/Back_Button.png" alt="" style={{ width: '8%', marginLeft:'100px', marginTop:'30px' }} />
                    </Link>
                 </div>
                 <div>
                     <Link to="/register">
                         <img src="Images/SignUp_Button.png" alt="" style={{ width: '8%', marginLeft:'1100px', marginTop:'100px' }} />
                   </Link>
                </div>
            </div>
        );
    }
}

export default LoginMaster;