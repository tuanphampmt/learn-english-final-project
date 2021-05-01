import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class RegisterMaster extends Component {
    render() {
        return (
            <>
                <form className="form-register center ">
                    <div className="form-group row">
                        <div className="col-md-7 d-flex align-items-center">
                            <label htmlFor="username">Tên đăng nhập<span className="req">*</span></label>
                        </div>
                        <div className="col-md-5">
                            <input type="username"
                                   name="username"
                                   className="input box-shadow"
                                   required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-7 d-flex align-items-center">
                            <label htmlFor="password">Mật khẩu<span className="req">*</span></label>
                        </div>
                        <div className="col-md-5">
                            <input type="password"
                                   name="password"
                                   className="input box-shadow"
                                   required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-7 d-flex align-items-center">
                            <label htmlFor="confpassword">Xác nhận mật khẩu<span className="req">*</span></label>
                        </div>
                        <div className="col-md-5">
                            <input type="password"
                                   name="confpassword"
                                   className="input box-shadow"
                                   required
                            />
                        </div>
                    </div>
                    <div className="button-login zoom center img-login-button">
                        <img src="Images/Login_Button_Click.png"></img>
                    </div>
                </form>
                <div className="back-button zoom">
                    <Link to="/home">
                        <img src="Images/Back_Button.png" alt=""/>
                    </Link>
                </div>
                <div className="signup-button">
                    <Link to="/login">
                        <img src="Images/Login_Button.png" alt="" className="heart"/>
                    </Link>
                </div>
            </>
        );
    }
}

export default RegisterMaster;