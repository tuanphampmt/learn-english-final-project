import React, {Component} from "react";
import ImageAvatar from "./ImageAvatar";
import {Link} from "react-router-dom";
import axios from 'axios';
import Auth from "../../service/Auth";

class ContentChangeAvatar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            trangthai: 1,
            avatar: "cat",
            isChanged: false,
            currentUser: Auth.getCurrentUser(),
        };
    }

    renderAvatar1 = () => (
        <div className="change-avatar">
            {
                this.state.isChanged ? <img src="Images/HomePage/Cat_avatar.png"/> : <img
                    src={this.state.currentUser.avatar === "AVATAR_CAT" ? "Images/HomePage/Cat_avatar.png" : this.state.currentUser.avatar === "AVATAR_DINOSAUR"
                        ? "Images/HomePage/Dinosaur_avatar.png" : "Images/HomePage/Dolphin_avatar.png"}
                />
            }

            <input
                className="box-shadow"
                type="text"
                value={this.state.currentUser.username}
            />
        </div>
    );

    renderAvatar2 = () => (
        <div className="change-avatar">
            {
                this.state.isChanged ? <img src="Images/HomePage/Dinosaur_avatar.png"/> : <img
                    src={this.state.currentUser.avatar === "AVATAR_CAT" ? "Images/HomePage/Cat_avatar.png" : this.state.currentUser.avatar === "AVATAR_DINOSAUR"
                        ? "Images/HomePage/Dinosaur_avatar.png" : "Images/HomePage/Dolphin_avatar.png"}
                />
            }
            <input
                className="box-shadow"
                type="text"
                value={this.state.currentUser.username}
            />
        </div>
    );

    renderAvatar3 = () => (
        <div className="change-avatar">
            {
                this.state.isChanged ? <img src="Images/HomePage/Dolphin_avatar.png"/> : <img
                    src={this.state.currentUser.avatar === "AVATAR_CAT" ? "Images/HomePage/Cat_avatar.png" : this.state.currentUser.avatar === "AVATAR_DINOSAUR"
                        ? "Images/HomePage/Dinosaur_avatar.png" : "Images/HomePage/Dolphin_avatar.png"}
                />
            }
            <input
                className="box-shadow"
                type="text"
                value={this.state.currentUser.username}

            />
        </div>
    );

    check = () => {
        if (this.state.trangthai === 1) {
            return this.renderAvatar1();
        } else if (this.state.trangthai === 2) {
            return this.renderAvatar2();
        } else {
            return this.renderAvatar3();
        }
    };

    displayTheme = (id) => {
        if (id === 1) {
            this.setState({trangthai: 1});
        } else if (id === 2) {
            this.setState({trangthai: 2});
        } else {
            this.setState({trangthai: 3});
        }
    };

    changeAvatar = () => {
        
        const {currentUser} = this.state;
        (async () => {
            try {
                const {id, accessToken} = currentUser;
                const res = await axios.put(`https://backend-kide.herokuapp.com/api/user/avatar/${id}/${this.state.avatar}`, {}, {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                const {data} = res;
                if (data) {
                    if (data.status) {
                        //display alert
                        document.getElementById("alert-change-avatar-success").style.display = "block";
                        document.getElementById("alert-change-avatar-success").innerHTML = `${data.message}`;

                        // change avatar
                        switch (this.state.avatar) {
                            case "cat" :
                                document.getElementById("avatar").src = "Images/HomePage/Cat_avatar.png";
                                //change localStorage
                                currentUser.avatar = "AVATAR_CAT"
                                localStorage.setItem("user", JSON.stringify({
                                    ...currentUser
                                }));
                                break;
                            case "dinosaur":
                                document.getElementById("avatar").src = "Images/HomePage/Dinosaur_avatar.png";
                                currentUser.avatar = "AVATAR_DINOSAUR"
                                localStorage.setItem("user", JSON.stringify({
                                    ...currentUser
                                }));
                                break;
                            default:
                                document.getElementById("avatar").src = "Images/HomePage/Dolphin_avatar.png";
                                currentUser.avatar = "AVATAR_DOLPHIN"
                                localStorage.setItem("user", JSON.stringify({
                                    ...currentUser
                                }));
                                break;
                        }

                    } else {
                        document.getElementById("alert-change-avatar-failed").style.display = "block";
                        document.getElementById("alert-change-avatar-failed").innerHTML = `${data.message}`;
                    }

                    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    Promise.resolve(2000)
                        .then(() => wait(2000))
                        .then(() => {
                            document.getElementById("alert-change-avatar-success").style.display = "none";
                            document.getElementById("alert-change-avatar-failed").style.display = "none";
                        });
                }
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        })()
    }
    getAvatar = (avatar) => {
        this.setState({
            avatar,
            isChanged: true
        })
    }

    render() {
        return (
            <div className="change box-shadow">
                {this.check()}
                <div className="chooseAvatar box-shadow">
                    <a href="#cat" onClick={() => {
                        this.displayTheme(1);
                        this.getAvatar("cat")
                    }}>
                        <ImageAvatar image="Images\HomePage\Cat_avatar.png"/>
                    </a>
                    <a href="#" onClick={() => {
                        this.displayTheme(2);
                        this.getAvatar("dinosaur")
                    }}>
                        <ImageAvatar
                            image="Images\HomePage\Dinosaur_avatar.png"
                            level="Mở khóa Lv5"
                        />
                    </a>
                    <a href="#" onClick={() => {
                        this.displayTheme(3);
                        this.getAvatar("dolphin");
                    }}>
                        <ImageAvatar
                            image="Images\HomePage\Dolphin_avatar.png"
                            level="Mở khóa Lv10"
                        />
                    </a>
                </div>
                <div style={{display: "flex", marginTop: "-5%"}}>
                    <Link to="#save" onClick={() => this.changeAvatar()}>
                        <img src="Images/HomePage/Save_Button.png" width="55%"/>
                    </Link>
                    <Link to="/home-page">
                        <img src="Images/HomePage/Close_Button.png" width="55%"/>
                    </Link>
                </div>
                <div className="alert alert-success" role="alert" id="alert-change-avatar-success"
                     style={{display: "none"}}>
                </div>
                <div className="alert alert-danger" role="alert" id="alert-change-avatar-failed"
                     style={{display: "none"}}>
                </div>
            </div>
        );
    }
}

export default ContentChangeAvatar;
