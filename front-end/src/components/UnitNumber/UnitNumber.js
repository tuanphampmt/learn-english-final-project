import React, { Component } from "react";
import { NumberDidMount } from "../common/js/Number";
import { DialogDidMount } from "../common/js/Dialog";
import { Link } from "react-router-dom";
import Auth from "../service/Auth";
import QuestionNumber from "./QuestionNumber";
import AnswerNumber from "./AnswerNumber";

class UnitNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ],
      number: "",
      answers: [
        {
          ans1: "/Images/Unit_Number/Question_Card/eight_1.png",
          ans2: "/Images/Unit_Number/Question_Card/five_1.png",
          ans3: "/Images/Unit_Number/Question_Card/One_1.png",
          ans4: "/Images/Unit_Number/Question_Card/Zero_1.png",
          code: "one",
          ans: 3,
        },
        {
          ans1: "/Images/Unit_Number/Question_Card/seven_1.png",
          ans2: "/Images/Unit_Number/Question_Card/Two_1.png",
          ans3: "/Images/Unit_Number/Question_Card/four_1.png",
          ans4: "/Images/Unit_Number/Question_Card/One_2.png",
          code: "two",
          ans: 2,
        },
        {
          ans1: "/Images/Unit_Number/Question_Card/six_1.png",
          ans2: "/Images/Unit_Number/Question_Card/nine_1.png",
          ans3: "/Images/Unit_Number/Question_Card/seven_2.png",
          ans4: "/Images/Unit_Number/Question_Card/Three_1.png",
          code: "three",
          ans: 4,
        },
        {
          ans1: "/Images/Unit_Number/Question_Card/Zero_3.png",
          ans2: "/Images/Unit_Number/Question_Card/four_2.png",
          ans3: "/Images/Unit_Number/Question_Card/six_2.png",
          ans4: "/Images/Unit_Number/Question_Card/Two_3.png",
          code: "four",
          ans: 2,
        },
        {
          ans1: "/Images/Unit_Number/Question_Card/five_3.png",
          ans2: "/Images/Unit_Number/Question_Card/seven_3.png",
          ans3: "/Images/Unit_Number/Question_Card/eight_2.png",
          ans4: "/Images/Unit_Number/Question_Card/four_3.png",
          code: "five",
          ans: 1,
        },
        {
          ans1: "/Images/Unit_Number/Question_Card/Three_3.png",
          ans2: "/Images/Unit_Number/Question_Card/One_1.png",
          ans3: "/Images/Unit_Number/Question_Card/six_3.png",
          ans4: "/Images/Unit_Number/Question_Card/nine_2.png",
          code: "six",
          ans: 3,
        },
        {
          ans1: "/Images/Unit_Number/Question_Card/seven_2.png",
          ans2: "/Images/Unit_Number/Question_Card/Three_3.png",
          ans3: "/Images/Unit_Number/Question_Card/nine_3.png",
          ans4: "/Images/Unit_Number/Question_Card/Two_2.png",
          code: "seven",
          ans: 1,
        },
        {
          ans1: "/Images/Unit_Number/Question_Card/One_2.png",
          ans2: "/Images/Unit_Number/Question_Card/eight_2.png",
          ans3: "/Images/Unit_Number/Question_Card/four_2.png",
          ans4: "/Images/Unit_Number/Question_Card/seven_2.png",
          code: "eight",
          ans: 2,
        },
        {
          ans1: "/Images/Unit_Number/Question_Card/Two_3.png",
          ans2: "/Images/Unit_Number/Question_Card/five_3.png",
          ans3: "/Images/Unit_Number/Question_Card/six_1.png",
          ans4: "/Images/Unit_Number/Question_Card/nine_2.png",
          code: "nine",
          ans: 4,
        },
        {
          ans1: "/Images/Unit_Number/Question_Card/four_2.png",
          ans2: "/Images/Unit_Number/Question_Card/One_2.png",
          ans3: "/Images/Unit_Number/Question_Card/Zero_3.png",
          ans4: "/Images/Unit_Number/Question_Card/eight_3.png",
          code: "zero",
          ans: 3,
        },
      ],
      answer: {},
      isCorrectAnswer: false,
      isWin: false,
      point: 0,
    };
  }

  componentDidMount() {

    const myThis = this;

   // this.setState({ answers: this.random(this.state.answers, 10) });
    const presentNumber = this.state.numbers.find(
      (number) => number === this.props.match.params.number
    );
    console.log(presentNumber);
    if (presentNumber) {
      this.setState({
        number: presentNumber,
      });
      this.toSpeak(presentNumber);
    } else {
      this.props.history.push("/home-number/one");
    }

    const checkAnswer = this.state.answers.find(
      (answer) => answer.code === this.props.match.params.number
    );
    if (checkAnswer) {
      this.setState({
        answer: checkAnswer,
      });
    }

    /////
    var countdown;

    function startTimer(duration, display) {
      var timer = 60 * duration,
        minutes,
        seconds;
      countdown = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = `Thời gian ${minutes}:${seconds}`;
        if (--timer < 0) {
          gameOver();
        }
      }, 1000);
    }

    function gameOver() {
      document.getElementsByClassName("panel")[0].style.display = "block";
      document.getElementById("notify").innerHTML = "Hết giờ";
      document.getElementById("notify").style.color = "#dc3545";
      document.getElementById("description").style.display = "none";
      document.getElementById("point-game").innerHTML = `${myThis.state.point}`;
      clearInterval(countdown);
    }

    function countdown() {
      var wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      Promise.resolve(3600)
        .then(() => wait(3600))
        .then(() => {
          document.getElementById("countdown").classList.remove("overlay-text");
          document.getElementById("countdown").classList.remove("visible");
          document.getElementsByClassName("demo")[0].style.display = "none";
          init();
        });
    }

    countdown();

   

    function init() {
      myThis.setState({ point: 0 });
      var minutes = 2;
      var display = document.getElementById("Timer");
      startTimer(minutes, display);
      document.getElementById("Point").innerText = `Điểm: ${myThis.state.point}`;
    }
  }

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

  toSpeak = (message) => {
    var speechSynthesisUtterance = new SpeechSynthesisUtterance(message);
    speechSynthesisUtterance.lang = "en-UK";
    window.speechSynthesis.speak(speechSynthesisUtterance);
  };

  correctAnswer = () => {
    let point;
    const presentNumber = this.state.numbers.find(
      (number) => number === this.props.match.params.number
    );
    if (presentNumber) {
      switch (presentNumber) {
        case "zero":
          point = this.state.point + 10;
          break;
        case "one":
          point = this.state.point + 20;
          break;
        case "two":
          point = this.state.point + 30;
          break;
        case "three":
          point = this.state.point + 40;
          break;
        case "four":
          point = this.state.point + 50;
          break;
        case "five":
          point = this.state.point + 60;
          break;
        case "six":
          point = this.state.point + 70;
          break;
        case "seven":
          point = this.state.point + 80;
          break;
        case "eight":
          point = this.state.point + 90;
          break;
        default:
          point = this.state.point + 100;
          break;
      }
    } else {
      this.props.history.push("/home-number/one");
    }
    this.setState({ isCorrectAnswer: true, point: point });
  };

  win = () => {
    this.setState({ isWin: true });
  };
  render() {
    return (
      <div className="container unit-aphabet">
        {this.state.isWin && (
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
        )}

        <div className="overlay-text visible" id="countdown">
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
        </div>

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
          <div
            className="game-number-row"
            id="game-number-row-question"
            style={{ textAlign: "center" }}
          >
            {this.state.isCorrectAnswer ? (
              <QuestionNumber code={this.state.number}></QuestionNumber>
            ) : (
              <a>
                <img
                  src="/Images/Unit_Number/Answer_Card/Answer_hidden.png"
                  width="50%"
                  onClick={() => this.toSpeak(this.state.number)}
                ></img>
              </a>
            )}
          </div>
          <AnswerNumber
            answer={this.state.answer}
            correctAnswer={() => this.correctAnswer()}
            win={() => this.win()}
          ></AnswerNumber>
        </div>
      </div>
    );
  }
}

export default UnitNumber;
