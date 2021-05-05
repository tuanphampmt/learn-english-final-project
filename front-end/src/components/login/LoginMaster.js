import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LoginMaster extends Component {
    render() {
        return (
            <>
                <form className="form-login center">
                    <div className="form-group row">
                        <div className="col-md-6 d-flex align-items-center">
                            <label htmlFor="username">Tên đăng nhập<span className="req">*</span></label>
                        </div>
                        <div className="col-md-6">
                            <input type="username"
                                   name="username"
                                   className="input box-shadow"
                                   required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6 d-flex align-items-center">
                            <label htmlFor="password">Mật khẩu<span className="req">*</span></label>
                        </div>
                        <div className="col-md-6">
                            <input type="password"
                                   name="password"
                                   className="input box-shadow"
                                   required
                            />
                        </div>
                    </div>
                    <div className="button-login zoom center img-login-button">
                        <img src="Images/LoginPage/Login_Button_Click.png"></img>
                    </div>
                </form>
                <div className="back-button zoom">
                    <Link to="/home">
                        <img src="Images/LoginPage/Back_Button.png" alt=""/>
                    </Link>
                </div>
                <div className="signup-button">
                    <Link to="/register">
                        <img src="Images/LoginPage/SignUp_Button.png" alt="" className="heart"/>
                    </Link>
                </div>
            </>
        );
    }
}

export default LoginMaster;