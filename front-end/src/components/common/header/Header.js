import React, {Component} from "react";
import {Link} from "react-router-dom";
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
        const {currentUser} = this.state;
        const avatar = localStorage.getItem("avatar");
        console.log(currentUser)
        return (
            <>
                {!currentUser && (
                    <div className="back-button zoom" style={{marginLeft: '-1300px'}}>
                    <Link to="/home">
                      <img src="Images/LoginPage/Back_Button.png" alt="" />
                    </Link>
                  </div>
                )}
                {currentUser && (
                    <div id="header" className="header box-shadow" style={{}}>
                        <Link to="/change-avatar" style={{width: '15%', marginRight: "15px"}}>
                            <img src={currentUser.avatar === "AVATAR_CAT" ? "Images/HomePage/Cat_avatar.png" : currentUser.avatar === "AVATAR_DINOSAUR"
                                ? "Images/HomePage/Dinosaur_avatar.png" : "Images/HomePage/Dolphin_avatar.png"}
                                 style={{width: '100%', borderRadius: '15px', backgroundColor: 'white'}}
                                 id="avatar"/>
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
                            <li>Lv 1</li>
                            <div className="progress ml-5 " style={{width: "80%"}}>
                                <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{width: "50%"}}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                            <li>50/100 exp</li>
                        </ul>
                        <Link
                            to="/login"
                            className="text-right"
                            style={{width: "13%"}}
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
                            />
                        </Link>
                    </div>
                )}
            </>
        );
    }
}

export default Header;
