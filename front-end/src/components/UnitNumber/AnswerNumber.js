import React, { Component } from "react";

class AnswerNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrNext: [
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
      url: "",
    };
  }

  displayButton = () => {
    const next = document.getElementById("next");
    const win = document.getElementsByClassName("win");
    var again = document.getElementById("again");
    var exit = document.getElementById("exit");
    next.style.display = "block";
    for (let i = 0; i < this.state.arrNext.length; i++) {
      if (this.props.answer.code === this.state.arrNext[i]) {
        if (i === this.state.arrNext.length - 1) {
          win[0].style.display = "block";
          this.props.isWin();
          again.style.display = "block";
          exit.style.display = "block";
          break;
        } else {
          this.setState({
            url: `/home-number/${this.state.arrNext[++i]}`,
          });
        }
      }
    }
  };
  toSpeak = (message) => {
    var speechSynthesisUtterance = new SpeechSynthesisUtterance(message);
    speechSynthesisUtterance.lang = "en-UK";
    window.speechSynthesis.speak(speechSynthesisUtterance);
  };

  nextAns = () => {
    var wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    Promise.resolve(3000)
      .then(() => wait(3000))
      .then(() => {
        for (let i = 0; i < this.state.arrNext.length; i++) {
          if (this.props.answer.code === this.state.arrNext[i]) {
            if (i === this.state.arrNext.length - 1) {
              //document.getElementsByClassName("panel")[0].style.display = "block";
              this.props.win();
              document.getElementById("notify").innerHTML = "Chúc mừng";
              document.getElementById("notify").style.color = "#28a745";
              document.getElementById("description").innerHTML = "Bạn được nhận thêm điểm kinh nghiệm";
          
              break;
            } else {
              window.location.assign(`/unit-number/${this.state.arrNext[++i]}`);
            }
          }
        }
      });
  };

  displayElement = () => {
    switch (this.props.answer.ans) {
      case 1:
        return (
          <>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans1}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => {
                    this.toSpeak("Yes");
                    this.correctAnswer();
                    this.nextAns();
                  }}
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans2}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => this.toSpeak("No")}
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans3}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => this.toSpeak("No")}
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans4}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => this.toSpeak("No")}
                ></img>
              </a>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans1}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => this.toSpeak("No")}
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans2}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => {
                    this.toSpeak("Yes");
                    this.correctAnswer();
                    this.nextAns();
                  }}
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans3}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => this.toSpeak("No")}
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans4}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => this.toSpeak("No")}
                ></img>
              </a>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans1}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => this.toSpeak("No")}
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans2}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => this.toSpeak("No")}
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans3}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => {
                    this.toSpeak("Yes");
                    this.correctAnswer();
                    this.nextAns();
                  }}
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans4}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => this.toSpeak("No")}
                ></img>
              </a>
            </div>
          </>
        );
      default:
        return (
          <>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans1}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => this.toSpeak("No")}
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans2}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => this.toSpeak("No")}
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans3}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => this.toSpeak("No")}
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <a>
                <img
                  src={this.props.answer.ans4}
                  width="70%"
                  style={{ marginLeft: "35px" }}
                  onClick={() => {
                    this.toSpeak("Yes");
                    this.correctAnswer();
                    this.nextAns();
                  }}
                ></img>
              </a>
            </div>
          </>
        );
    }
  };
  correctAnswer = () => {
    this.props.correctAnswer();
  };
  render() {
    return (
      <div className="game-number-row row" id="game-number-row-answer">
        {this.displayElement()}
      </div>
    );
  }
}

export default AnswerNumber;
