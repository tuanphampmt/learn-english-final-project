import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import swal from "sweetalert";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Auth from "../service/Auth";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger tbao" role="alert">
        Bắt buộc
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger tbao" role="alert">
        Tên đăng nhập từ 3 - 20 kí tự
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 10) {
    return (
      <div className="alert alert-danger tbao" role="alert">
        Mật khẩu nhập từ 6 - 10 kí tự
      </div>
    );
  }
};

class RegisterMaster extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      confpassword: "",
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

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      Auth.register(this.state.username, this.state.password).then(
        (response) => {
          swal({
            title: "Đăng ký thành công",
            icon: "success",
          }).then(() => {
            this.props.history.push("/login");
            window.location.reload();
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          if (resMessage === "Error: Username is already taken!") {
            swal({
              title: "Trùng tên đăng nhập",
              icon: "error",
            });
          }
        }
      );
    }
  }

  render() {
    return (
      <>
        <Form
          className="form-register center "
          onSubmit={this.handleRegister}
          ref={(c) => {
            this.form = c;
          }}
        >
          {!this.state.successful && (
            <div>
              <div className="form-group row">
                <div className="col-md-7 d-flex align-items-center">
                  <label htmlFor="username">
                    Tên đăng nhập<span className="req">*</span>
                  </label>
                </div>
                <div className="col-md-5">
                  <Input
                    type="username"
                    name="username"
                    className="input box-shadow"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-7 d-flex align-items-center">
                  <label htmlFor="password">
                    Mật khẩu<span className="req">*</span>
                  </label>
                </div>
                <div className="col-md-5">
                  <Input
                    type="password"
                    name="password"
                    className="input box-shadow"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-7 d-flex align-items-center">
                  <label htmlFor="confpassword">
                    Xác nhận mật khẩu<span className="req">*</span>
                  </label>
                </div>
                <div className="col-md-5">
                  <Input
                    type="password"
                    name="confpassword"
                    className="input box-shadow"
                    value={this.state.confpassword}
                    onChange={this.handleConfirmPassword}
                    validations={[]}
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
                  Đăng ký
                </button>
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
        <div className="signup-button">
          <Link to="/login">
            <img
              src="Images/StartPage/Login_Button.png"
              alt=""
              className="heart"
            />
          </Link>
        </div>
      </>
    );
  }
}

export default RegisterMaster;
