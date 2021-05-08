import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../service/Auth";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger tbao" role="alert">
        Bắt buộc
      </div>
    );
  }
};
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
      message: "",
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();
    
    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      Auth.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/homePage");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          if (resMessage === "Request failed with status code 401") {
            this.setState({
              loading: false,
              message: "Sai tên đăng nhập hoặc mật khẩu",
            });
          }
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    return (
      <>
        <Form
          className="form-login center"
          onSubmit={this.handleLogin}
          ref={(c) => {
            this.form = c;
          }}
        >
          <div className="form-group row">
            <div className="col-md-6 d-flex align-items-center">
              <label htmlFor="username">
                Tên đăng nhập<span className="req">*</span>
              </label>
            </div>
            <div className="col-md-6">
              <Input
                type="username"
                name="username"
                className="input box-shadow"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6 d-flex align-items-center">
              <label htmlFor="password">
                Mật khẩu<span className="req">*</span>
              </label>
            </div>
            <div className="col-md-6">
              <Input
                type="password"
                name="password"
                className="input box-shadow"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>
          </div>
          <div className="form-group">
            <button 
              className="button-login zoom center img-login-button box-shadow"
              disabled={this.state.loading}
              type="submit"
            >
              {this.state.loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              Đăng nhập
            </button>
          </div>
          {this.state.message && (
            <div className="form-group tbao">
              <div className="alert alert-danger" role="alert">
                {this.state.message}
              </div>
            </div>
          )}
          <CheckButton
            style={{ display: "none" }}
            ref={(c) => {
              this.checkBtn = c;
            }}
          />
        </Form>
        <div className="back-button zoom">
          <Link to="/home">
            <img src="Images/LoginPage/Back_Button.png" alt="" />
          </Link>
        </div>
        <div className="signin-button">
          <Link to="/register">
            <img
              src="Images/LoginPage/SignUp_Button.png"
              alt=""
              className="heart"
            />
          </Link>
        </div>
      </>
    );
  }
}

export default LoginMaster;
