import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LoginMaster extends Component {
    render() {
        return (
            <>
                <div className="form-login center">
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label htmlFor="username">Tên đăng nhập</label>
                        </div>
                        <div className="col-md-6">
                            <input type="username" name="username" className="text box"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label htmlFor="password">Mật khẩu</label>
                        </div>
                        <div className="col-md-6">
                            <input type="password" name="password" className="text box"/>
                        </div>
                    </div>
                    <div className="form-group button-login zoom center">
                        <img src="Images/Login_Button_Click.png"></img>
                    </div>
                </div>
                <div className="back-button zoom">
                    <Link to="/home">
                        <img src="Images/Back_Button.png" alt=""/>
                    </Link>
                </div>
                <div className="signup-button">
                    <Link to="/register">
                        <img src="Images/SignUp_Button.png" alt="" className="heart"/>
                    </Link>
                </div>
            </>
        );
    }
}

export default LoginMaster;