import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../service/Auth";
class UnitAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWin: false,
      score: 0,
      countdown: null,
      start: false,
      isHidden: true,
      minutes: 0,
      seconds: "00",
      number: "",
      gameOver: false,
      currentUser: Auth.getCurrentUser(),
      animals: [
        "Cat",
        "Crab",
        "Dog",
        "Dolphin",
        "Duck",
        "Lion",
        "Monkey",
        "Penguin",
        "Pig",
        "Sheep",
      ],
      animal: "",
      urls: [
        {
          code: "Cat",
          name: "Images/Unit Animal/Game_Card/G_Cat.png",
        },
        {
          code: "Crab",
          name: "Images/Unit Animal/Game_Card/G_Crab.png",
        },
        { code: "Dog", name: "Images/Unit Animal/Game_Card/G_Dog.png" },
        {
          code: "Dolphin",
          name: "Images/Unit Animal/Game_Card/G_Dolphin.png",
        },
        {
          code: "Duck",
          name: "Images/Unit Animal/Game_Card/G_Duck.png",
        },
        {
          code: "Lion",
          name: "Images/Unit Animal/Game_Card/G_Lion.png",
        },
        {
          code: "Monkey",
          name: "Images/Unit Animal/Game_Card/G_Monkey.png",
        },
        {
          code: "Penguin",
          name: "Images/Unit Animal/Game_Card/G_Penguin.png",
        },
        {
          code: "Pig",
          name: "Images/Unit Animal/Game_Card/G_Pig.png",
        },
        {
          code: "Sheep",
          name: "Images/Unit Animal/Game_Card/G_Sheep.png",
        },
      ],
    };
  }
  toSpeak = (message) => {
    var speechSynthesisUtterance = new SpeechSynthesisUtterance(message);
    speechSynthesisUtterance.lang = "en-UK";
    window.speechSynthesis.speak(speechSynthesisUtterance);
  };

  random = (arr, n) => {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  };

  componentDidMount() {
    let animal = this.random(this.state.animals, 1)[0];
    this.setState({ animal });
  }
  render() {
    return (
      <div className="container unit-aphabet">
        <div
          className="row center"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="col-sm-1">
            <Link to="/home-page">
              <img
                src="/Images/LoginPage/Back_Button.png"
                alt=""
                style={{ width: "200%", marginLeft: "-190px" }}
              />
            </Link>
          </div>
          <div className="col-md-3 img-cat">
            <img
              src="/Images/Avatar/Cat/Cat_talk.png"
              alt=""
              id="img-cat"
              className="img-thumbnail"
            />
          </div>
          <div className="col-md-7">
            <div className="time-bar row" id="gameInfoBlock">
              <div className="time col-md-8">
                <span id="Timer">
                  Thời gian {this.state.minutes}:{this.state.seconds}
                </span>
              </div>
              <div className="score col-md-3">
                <span style={{ fontSize: "22px" }}>
                  Điểm: {this.state.score}
                </span>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </div>
        <div className="row center background-color-white game-aphabet mt-4">
          <div
            style={{ textAlign: "center", marginTop: "-25%", position: "absolute" }}
          >
            <a onClick={() => this.toSpeak(this.state.animal)}>
              <h2 style={{ fontSize: "60px" }}>{this.state.animal}</h2>
            </a>
          </div>
          <div>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Cat.png"
                alt=""
                style={{ cursor: "pointer" }}
                id="Red"
                width="120px"
                height="80px"
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Crab.png"
                alt=""
                width="120px"
                id="Yellow"
                style={{ cursor: "pointer" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Dog.png"
                alt=""
                width="120px"
                id="Brown"
                style={{ cursor: "pointer" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Crab.png"
                alt=""
                width="120px"
                id="Yellow"
                style={{ cursor: "pointer" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Monkey.png"
                alt=""
                width="120px"
                id="Brown"
                style={{ cursor: "pointer" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Pig.png"
                alt=""
                width="120px"
                id="Yellow"
                style={{ cursor: "pointer" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Dog.png"
                alt=""
                width="120px"
                id="Brown"
                style={{ cursor: "pointer" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <br/>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Lion.png"
                alt=""
                style={{ cursor: "pointer", marginTop: "5px"  }}
                id="Red"
                width="120px"
               height="80px"
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Dolphin.png"
                alt=""
                width="120px"
                id="Yellow"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Sheep.png"
                alt=""
                width="120px"
                id="Brown"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Pig.png"
                alt=""
                width="120px"
                id="Yellow"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Duck.png"
                alt=""
                width="120px"
                id="Brown"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Pig.png"
                alt=""
                width="120px"
                id="Yellow"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Dog.png"
                alt=""
                width="120px"
                id="Brown"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <br/>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Penguin.png"
                alt=""
                style={{ cursor: "pointer", marginTop: "5px"    }}
                id="Red"
                width="120px"
                height="80px"
                tyle={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Cat.png"
                alt=""
                width="120px"
                id="Yellow"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Sheep.png"
                alt=""
                width="120px"
                id="Brown"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Lion.png"
                alt=""
                width="120px"
                id="Yellow"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Pig.png"
                alt=""
                width="120px"
                id="Brown"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Duck.png"
                alt=""
                width="120px"
                id="Yellow"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Dog.png"
                alt=""
                width="120px"
                id="Brown"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <br/>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Lion.png"
                alt=""
                style={{ cursor: "pointer", marginTop: "5px"  }}
                id="Red"
                width="120px"
                height="80px"
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Dolphin.png"
                alt=""
                width="120px"
                id="Yellow"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Sheep.png"
                alt=""
                width="120px"
                id="Brown"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Pig.png"
                alt=""
                width="120px"
                id="Yellow"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Dog.png"
                alt=""
                width="120px"
                id="Brown"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Pig.png"
                alt=""
                width="120px"
                id="Yellow"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px" }}
              />
            </a>
            <a className="zoom">
              <img
                src="/Images/Unit Animal/Game_Card/G_Duck.png"
                alt=""
                width="120px"
                id="Brown"
                style={{ cursor: "pointer", marginTop: "5px" }}
                height="80px"
                style={{ marginLeft: "20px"}}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UnitAnimal;
