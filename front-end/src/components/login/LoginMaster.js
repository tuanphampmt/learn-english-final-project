import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Auth from '../service/Auth'
class LoginMaster extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            Auth.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("/home-theme");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    if (resMessage === "Request failed with status code 401") {
                        this.setState({
                            loading: false,
                            message: "Sai tên đăng nhập hoặc mật khẩu"
                        });
                    }

                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }
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