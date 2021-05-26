import React, {Component} from "react";
import {withRouter} from "react-router";

import {Redirect} from 'react-router';

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


    toSpeak = (message) => {
        var speechSynthesisUtterance = new SpeechSynthesisUtterance(message);
        speechSynthesisUtterance.lang = "en-UK";
        window.speechSynthesis.speak(speechSynthesisUtterance);
    };

    nextAns = () => {
        this.props.showAnswer();
        var wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        Promise.resolve(3000)
            .then(() => wait(3000))
            .then(() => {
                this.props.redirectAnswer();
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
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("Yes");
                                        this.nextAns();
                                    }}
                                />
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a>
                                <img
                                    src={this.props.answer.ans2}
                                    width="70%"
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("No");
                                        this.props.redirectNoAnswer()
                                    }}
                                />
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a>
                                <img
                                    src={this.props.answer.ans3}
                                    width="70%"
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("No");
                                        this.props.redirectNoAnswer()
                                    }}
                                />
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a>
                                <img
                                    src={this.props.answer.ans4}
                                    width="70%"
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("No");
                                        this.props.redirectNoAnswer()
                                    }}
                                />
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
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("No");
                                        this.props.redirectNoAnswer()
                                    }}
                                />
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a>
                                <img
                                    src={this.props.answer.ans2}
                                    width="70%"
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("Yes");
                                        this.nextAns();
                                    }}
                                />
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a>
                                <img
                                    src={this.props.answer.ans3}
                                    width="70%"
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("No");
                                        this.props.redirectNoAnswer()
                                    }}
                                />
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a>
                                <img
                                    src={this.props.answer.ans4}
                                    width="70%"
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("No");
                                        this.props.redirectNoAnswer()
                                    }}
                                />
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
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("No");
                                        this.props.redirectNoAnswer()
                                    }}
                                />
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a>
                                <img
                                    src={this.props.answer.ans2}
                                    width="70%"
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("No");
                                        this.props.redirectNoAnswer()
                                    }}
                                />
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a>
                                <img
                                    src={this.props.answer.ans3}
                                    width="70%"
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("Yes");
                                        this.nextAns();
                                    }}
                                />
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a>
                                <img
                                    src={this.props.answer.ans4}
                                    width="70%"
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("No");
                                        this.props.redirectNoAnswer()
                                    }}
                                />
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
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("No");
                                        this.props.redirectNoAnswer()
                                    }}
                                />
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a>
                                <img
                                    src={this.props.answer.ans2}
                                    width="70%"
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("No");
                                        this.props.redirectNoAnswer()
                                    }}
                                />
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a>
                                <img
                                    src={this.props.answer.ans3}
                                    width="70%"
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("No");
                                        this.props.redirectNoAnswer()
                                    }}
                                />
                            </a>
                        </div>
                        <div className="col-sm-3">
                            <a>
                                <img
                                    src={this.props.answer.ans4}
                                    width="70%"
                                    style={{marginLeft: "35px"}}
                                    onClick={() => {
                                        this.toSpeak("Yes");
                                        this.nextAns();
                                    }}
                                />
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
        // const { redirect } = this.state;
        //
        // if (redirect) {
        //     return <Redirect to={this.state.url}/>
        // }
        return (
            <div className="game-number-row row" id="game-number-row-answer">
                {this.displayElement()}
            </div>
        );
    }
}

export default AnswerNumber;


