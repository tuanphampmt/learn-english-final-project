import React, { Component } from "react";
import ImageAvatar from "./ImageAvatar";
import { Link } from "react-router-dom";

class ContentChangeAvatar extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { trangthai: 1 };
  }

  renderAvatar1 = () => (
    <div>
      <img
        src="Images\HomePage\Dinosaur_normal.png"
        style={{
          marginTop: "10px",
          width: "30%",
          borderRadius: "12px",
          boxShadow: "5px 5px 5px grey",
          backgroundColor: "white",
        }}
      ></img>
      <input
        className="box-shadow"
        type="text"
        value="name"
        style={{
          width: "45%",
          fontStyle: "italic",
          fontWeight: "bold",
          borderRadius: "12px",
          border: "none",
          marginLeft: "40px",
          paddingLeft: "20px",
          color: "#273f63",
        }}
      ></input>
    </div>
  );

  renderAvatar2 = () => (
    <div>
      <img
        src="Images\Avatar\Cat\Cat_normal.png"
        style={{
          marginTop: "10px",
          width: "30%",
          borderRadius: "12px",
          boxShadow: "5px 5px 5px grey",
          backgroundColor: "white",
        }}
      ></img>
      <input
        className="box-shadow"
        type="text"
        value="name2"
        style={{
          width: "45%",
          fontStyle: "italic",
          fontWeight: "bold",
          borderRadius: "12px",
          border: "none",
          marginLeft: "40px",
          paddingLeft: "20px",
          color: "#273f63",
        }}
      ></input>
    </div>
  );

  renderAvatar3 = () => (
    <div>
      <img
        src="Images\Avatar\Cat\Cat_no.png"
        style={{
          marginTop: "10px",
          width: "30%",
          borderRadius: "12px",
          boxShadow: "5px 5px 5px grey",
          backgroundColor: "white",
        }}
      ></img>
      <input
        className="box-shadow"
        type="text"
        value="name3"
        style={{
          width: "45%",
          fontStyle: "italic",
          fontWeight: "bold",
          borderRadius: "12px",
          border: "none",
          marginLeft: "40px",
          paddingLeft: "20px",
          color: "#273f63",
        }}
      ></input>
    </div>
  );

  check = () => {
    console.log(this.state.trangthai);
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
      this.setState({ trangthai: 1 });
    } else if (id === 2) {
      this.setState({ trangthai: 2 });
    } else {
      this.setState({ trangthai: 3 });
    }
  };
  render() {
    return (
      <div className="change box-shadow">
        {this.check()}
        <div className="chooseAvatar">
          <div>
            <a href="#" onClick={() => this.displayTheme(1)}>
              <ImageAvatar image="Images\HomePage\Dinosaur_normal.png"></ImageAvatar>
            </a>
          </div>
          <div>
            <a href="#" onClick={() => this.displayTheme(2)}>
              <ImageAvatar
                image="Images\Avatar\Cat\Cat_normal.png"
                level="Mở khóa Lv5"
              ></ImageAvatar>
            </a>
          </div>
          <div>
            <a href="#" onClick={() => this.displayTheme(3)}>
              <ImageAvatar
                image="Images\Avatar\Cat\Cat_no.png"
                level="Mở khóa Lv10"
              ></ImageAvatar>
            </a>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "-5%" }}>
          <Link to="/chude1">
            <img src="Images/HomePage/Save_Button.png" width="70%"></img>
          </Link>
          <Link to="/homePage">
            <img src="Images/HomePage/Close_Button.png" width="70%"></img>
          </Link>
        </div>
      </div>
    );
  }
}

export default ContentChangeAvatar;
