import React, { Component } from "react";
import { Link } from "react-router-dom";
class UnitColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            colorsYesPlay: ["green", "orange", "red", "pink", "purple", "yellow", "gray", "blue", "black", "brown"]
        }
    }
  toSpeak = (message) => {
    var speechSynthesisUtterance = new SpeechSynthesisUtterance(message);
    speechSynthesisUtterance.lang = "en-UK";
    window.speechSynthesis.speak(speechSynthesisUtterance);
  };

  playAudio = (color) => {
    if (this.props.code === color) {
        this.toSpeak("Yes")
    } else {
        this.toSpeak("No")
    }
}
  render() {
    return (
      <div className="container unit-aphabet">
        {/* {this.state.isWin && (
          <div id="js-panel" className="panel" style={{ display: "block" }}>
            <div className="panel__content">
              <h4 id="notify"></h4>
              <h2>
                Bạn đạt <span id="point-game">{this.state.point}</span> điểm
              </h2>
              <p id="description"></p>
            </div>
            <div className="panel__flaps">
              <div className="flap outer flap--left" />
              <Link className="flap flap__btn" id="play-again">
                Chơi lại
              </Link>
              <Link to="/home-page" className="flap flap__btn" id="exit">
                Thoát
              </Link>
              <div className="flap outer flap--right" />
            </div>
          </div>
        )} */}
        {/* <div className="overlay-text visible" id="countdown">
          <div className="demo">
            <div className="demo__colored-blocks">
              <div className="demo__colored-blocks-rotater">
                <div className="demo__colored-block" />
                <div className="demo__colored-block" />
                <div className="demo__colored-block" />
              </div>
              <div className="demo__colored-blocks-inner" />
              <div className="demo__text">Ready</div>
            </div>
            <div className="demo__inner">
              <svg className="demo__numbers" viewBox="0 0 100 100">
                <defs>
                  <path className="demo__num-path-1" d="M40,28 55,22 55,78" />
                  <path
                    className="demo__num-join-1-2"
                    d="M55,78 55,83 a17,17 0 1,0 34,0 a20,10 0 0,0 -20,-10"
                  />
                  <path
                    className="demo__num-path-2"
                    d="M69,73 l-35,0 l30,-30 a16,16 0 0,0 -22.6,-22.6 l-7,7"
                  />
                  <path
                    className="demo__num-join-2-3"
                    d="M28,69 Q25,44 34.4,27.4"
                  />
                  <path
                    className="demo__num-path-3"
                    d="M30,20 60,20 40,50 a18,15 0 1,1 -12,19"
                  />
                </defs>
                <path
                  className="demo__numbers-path"
                  d="M-10,20 60,20 40,50 a18,15 0 1,1 -12,19
                Q25,44 34.4,27.4
                l7,-7 a16,16 0 0,1 22.6,22.6 l-30,30 l35,0 L69,73 
                a20,10 0 0,1 20,10 a17,17 0 0,1 -34,0 L55,83 
                l0,-61 L40,28"
                />
              </svg>
            </div>
          </div>
        </div> */}
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
                <span id="Timer">Thời gian: 2:00</span>
              </div>
              <div className="point col-md-3">
                <span id="Point">Điểm: 0</span>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
        <div className="row center background-color-white game-aphabet mt-4">
          <div className="col-sm-8">
            <a>
              <img
                src="/Images/Unit Color/Game_Card/Pen/Red_Pen.png"
                alt=""
                width="100px"
                height="150px"
              />
            </a>
            <a>
              <img
                src="/Images/Unit Color/Game_Card/Pen/Yellow_Pen.png"
                alt=""
                width="100px"
                height="150px"
                style={{ marginLeft: "50px" }}
              />
            </a>
            <a>
              <img
                src="/Images/Unit Color/Game_Card/Pen/Brown_Pen.png"
                alt=""
                width="100px"
                height="150px"
                style={{ marginLeft: "50px" }}
              />
            </a>
            <br />
            <a>
              <img
                src="/Images/Unit Color/Game_Card/Pen/Green_Pen.png"
                alt=""
                width="100px"
                height="150px"
              />
            </a>
            <a>
              <img
                src="/Images/Unit Color/Game_Card/Pen/Pink_Pen.png"
                alt=""
                width="100px"
                height="150px"
                style={{ marginLeft: "50px" }}
              />
            </a>
            <a>
              <img
                src="/Images/Unit Color/Game_Card/Pen/White_Pen.png"
                alt=""
                width="100px"
                height="150px"
                style={{ marginLeft: "50px" }}
              />
            </a>
            <a>
              <img
                src="/Images/Unit Color/Game_Card/Pen/Orange_Pen.png"
                alt=""
                width="100px"
                height="150px"
                style={{ marginLeft: "50px" }}
              />
            </a>
            <br />
            <a>
              <img
                src="/Images/Unit Color/Game_Card/Pen/Blue_Pen.png"
                alt=""
                width="100px"
                height="150px"
              />
            </a>
            <a>
              <img
                src="/Images/Unit Color/Game_Card/Pen/Purple_Pen.png"
                alt=""
                width="100px"
                height="150px"
                style={{ marginLeft: "50px" }}
              />
            </a>
            <a>
              <img
                src="/Images/Unit Color/Game_Card/Pen/Black_Pen.png"
                alt=""
                width="100px"
                height="150px"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
          <div
            className="col-sm-4 game-number-row"
            id="game-number-row-question"
            style={{marginLeft: "-100px", textAlign: 'center' }}
          >
            <a>
              <img
                src="/Images/Unit Color/Game_Card/Pig/NoColor_Pig.png"
                width="100%"
                onClick={() => this.toSpeak("yellow")}
              ></img>
            </a>
            <h2 style={{fontSize: "80px"}}>Yellow</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default UnitColor;
