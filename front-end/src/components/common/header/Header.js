import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../../service/Auth";
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: Auth.getCurrentUser(),
      showModeratorBoard: false,
      showAdminBoard: false,
    };
  }
  logOut() {
    Auth.logout();
  }
  componentDidMount() {
    const user = Auth.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  render() {
    const { currentUser } = this.state;
    const { showAdminBoard } = this.state;
    return (
      <div className="center">
        {currentUser && (
          <div id="header" className="header box-shadow" style={{}}>
            <Link to="/changeAvatar" style={{ width: "15%" }}>
              <img
                src="Images\HomePage\Cat_avatar.png"
                style={{ width: "100%", borderRadius: "15px" }}
              ></img>
            </Link>
            <label className="text-left">{currentUser.username}</label>
            <ul
              className="text-center w-100"
              style={{
                listStyle: "none",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              <li>Lv 1 </li>
              <div className="progress ml-5 " style={{ width: "80%" }}>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <li>50/100 exp</li>
            </ul>
            {showAdminBoard && (
              <Link to={"/admin"}>
                <div
                  className="btn btn-info nut"
                  style={{ width: 100, marginLeft: "30px", marginRight: "20px" }}
                >
                  Admin
                </div>
              </Link>
            )}
            <Link
              to="/login"
              className="text-right"
              style={{ width: "13%" }}
              onClick={this.logOut}
            >
              <img
                src="Images/HomePage/Logout_Icon.png"
                className="logout"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
              ></img>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
