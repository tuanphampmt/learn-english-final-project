import React, {Component} from "react";
import {NumberDidMount} from "../common/js/Number";
import {DialogDidMount} from "../common/js/Dialog";
import {Link} from "react-router-dom";
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
            score: 0,
            countdown: null,
            start: false,
            isHidden: true,
            minutes: 0,
            seconds: "00",
            number: "",
            gameOver: false
        };
    }


    componentDidMount() {
        sessionStorage.setItem("numbers", JSON.stringify(this.state.numbers))
        sessionStorage.setItem("answers", JSON.stringify(this.state.answers))
    }

    countdown = () => {
        this.setState({start: true})
        if (this.state.numbers.length === 0) {
            const numbers = JSON.parse(sessionStorage.getItem("numbers"));
            const answers = JSON.parse(sessionStorage.getItem("answers"));
            document.getElementsByClassName("demo")[0].style.display = "block";
            document.getElementById("countdown").classList.add("overlay-text");
            document.getElementById("countdown").classList.add("visible");
            this.setState({isWin: false, numbers, answers});
            const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

            Promise.resolve(3600)
                .then(() => wait(3600))
                .then(() => {
                    this.setState({isHidden: false, isCorrectAnswer: false});
                    document.getElementById("countdown").classList.remove("overlay-text");
                    document.getElementById("countdown").classList.remove("visible");
                    document.getElementsByClassName("demo")[0].style.display = "none";
                    const presentNumber = this.random(this.state.numbers, 1)[0];
                    const arrNumber = this.state.numbers.filter(n => n !== presentNumber);
                    const presentAnswer = this.state.answers.find(a => a.code === presentNumber);
                    const arrAnswers = this.state.answers.filter(b => b.code !== presentAnswer.code);
                    const answers = {
                        number: presentNumber,
                        numbers: arrNumber,
                        answer: presentAnswer,
                        answers: arrAnswers
                    }
                    this.toSpeak(presentNumber);
                    this.setState({...answers})
                    this.init();
                });
            return;
        }
        let wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        Promise.resolve(3600)
            .then(() => wait(3600))
            .then(() => {
                this.setState({isHidden: false})
                const presentNumber = this.random(this.state.numbers, 1)[0];
                const arrNumber = this.state.numbers.filter(n => n !== presentNumber);
                const presentAnswer = this.state.answers.find(a => a.code === presentNumber);
                const arrAnswers = this.state.answers.filter(b => b.code !== presentAnswer.code);
                const answers = {
                    number: presentNumber,
                    numbers: arrNumber,
                    answer: presentAnswer,
                    answers: arrAnswers
                }
                this.toSpeak(presentNumber);
                this.setState({...answers})
                document.getElementById("countdown").classList.remove("overlay-text");
                document.getElementById("countdown").classList.remove("visible");
                document.getElementsByClassName("demo")[0].style.display = "none";
                this.init();
            });
    }

    gameOver = () => {
        this.setState({gameOver: true})
        clearInterval(this.state.countdown);
    }

    init = () => {
        this.setState({score: 0});
        let minutes = 2;
        let display = document.getElementById("Timer");
        this.startTimer(minutes, display);
        // document.getElementById("score").innerText = `Điểm: ${this.state.score}`;
    }

    startTimer = (duration, display) => {
        let timer = 60 * duration,
            minutes,
            seconds;
        const countdown = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            this.setState({minutes, seconds})
            if (--timer < 0) {
                this.gameOver();
            }
        }, 1000);
        this.setState({countdown})
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
        let speechSynthesisUtterance = new SpeechSynthesisUtterance(message);
        speechSynthesisUtterance.lang = "en-UK";
        window.speechSynthesis.speak(speechSynthesisUtterance);
    };


    redirectAnswer = () => {
        if (this.state.answers.length === 0) {
            this.setState({score: this.state.score, isWin: true})
            clearInterval(this.state.countdown);
        } else {
            this.setState({
                score: this.state.score + 10,
                isCorrectAnswer: false
            })
            const presentNumber = this.random(this.state.numbers, 1)[0];
            this.toSpeak(presentNumber)
            const arrNumber = this.state.numbers.filter(n => n !== presentNumber);
            this.setState({number: presentNumber, numbers: arrNumber})
            const checkAnswer = this.state.answers.find(a => a.code === presentNumber);
            const arrAnswers = this.state.answers.filter(b => b.code !== checkAnswer.code);

            if (checkAnswer) {
                this.setState({
                    answer: checkAnswer,
                    answers: arrAnswers
                });
            }
        }
    }

    showAnswer = () => {
        this.setState({
            isCorrectAnswer: true
        })
    }

    redirectNoAnswer = () => {
        var wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        Promise.resolve(2000)
            .then(() => wait(2000))
            .then(() => {
                if (this.state.answers.length === 0) {
                    this.setState({score: this.state.score, isWin: true})
                    clearInterval(this.state.countdown);
                } else {
                    this.setState({
                        isCorrectAnswer: false
                    })
                    const presentNumber = this.random(this.state.numbers, 1)[0];
                    this.toSpeak(presentNumber)
                    const arrNumber = this.state.numbers.filter(n => n !== presentNumber);
                    this.setState({number: presentNumber, numbers: arrNumber})
                    const checkAnswer = this.state.answers.find(a => a.code === presentNumber);
                    const arrAnswers = this.state.answers.filter(b => b.code !== checkAnswer.code);

                    if (checkAnswer) {
                        this.setState({
                            answer: checkAnswer,
                            answers: arrAnswers
                        });
                    }
                }
            });
    }

    gameOverCountdown = () => {
        this.setState({start: true, gameOver: false})
        document.getElementsByClassName("demo")[0].style.display = "block";
        document.getElementById("countdown").classList.add("overlay-text");
        document.getElementById("countdown").classList.add("visible");
        let wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        Promise.resolve(3600)
            .then(() => wait(3600))
            .then(() => {
                this.setState({isHidden: false})
                const presentNumber = this.random(this.state.numbers, 1)[0];
                const arrNumber = this.state.numbers.filter(n => n !== presentNumber);
                const presentAnswer = this.state.answers.find(a => a.code === presentNumber);
                const arrAnswers = this.state.answers.filter(b => b.code !== presentAnswer.code);
                const answers = {
                    number: presentNumber,
                    numbers: arrNumber,
                    answer: presentAnswer,
                    answers: arrAnswers
                }
                this.toSpeak(presentNumber);
                this.setState({...answers})
                document.getElementById("countdown").classList.remove("overlay-text");
                document.getElementById("countdown").classList.remove("visible");
                document.getElementsByClassName("demo")[0].style.display = "none";
                this.init();
            });
    }

    render() {
        console.log(this.state.score)
        return (
            <div className="container unit-aphabet">
                {this.state.isWin && (
                    <div id="js-panel" className="panel" style={{display: "block"}}>
                        <div className="panel__content">
                            <h4 id="notify" style={{color: "#28a745"}}>Chúc mừng</h4>
                            <h2>
                                Bạn đạt <span id="score-game">{this.state.score}</span> điểm
                            </h2>
                            <p id="description">Bạn được nhận thêm điểm kinh nghiệm</p>
                        </div>
                        <div className="panel__flaps">
                            <div className="flap outer flap--left"/>
                            <Link className="flap flap__btn" id="play-again" onClick={() => this.countdown()}>
                                Chơi lại
                            </Link>
                            <Link to="/home-page" className="flap flap__btn" id="exit">
                                Thoát
                            </Link>
                            <div className="flap outer flap--right"/>
                        </div>
                    </div>
                )}

                {
                    this.state.gameOver && (
                        <div id="js-panel" className="panel" style={{display: "block"}}>
                            <div className="panel__content">
                                <h4 id="notify" style={{color: "#dc3545"}}>Hết giờ"</h4>
                                <h2>
                                    Bạn đạt <span id="score-game">{this.state.score}</span> điểm
                                </h2>
                                <p id="description"></p>
                            </div>
                            <div className="panel__flaps">
                                <div className="flap outer flap--left"/>
                                <Link className="flap flap__btn" id="play-again"
                                      onClick={() => this.gameOverCountdown()}>
                                    Chơi lại
                                </Link>
                                <Link to="/home-page" className="flap flap__btn" id="exit">
                                    Thoát
                                </Link>
                                <div className="flap outer flap--right"/>
                            </div>
                        </div>
                    )
                }

                {!this.state.start && (
                    <div id="js-panel" className="panel" style={{display: "block"}}>
                        <div className="panel__content">
                            <h4>Bắt đầu</h4>
                            <p style={{fontSize: "1.5em"}}> Bạn hãy nghe và chọn câu trả lời đúng nhất.</p>
                        </div>
                        <div className="panel__flaps">
                            <div className="flap outer flap--left"/>
                            <Link className="flap flap__btn" id="play-again" onClick={() => this.countdown()}>
                                Bắt đầu
                            </Link>
                            <Link to="/home-page" className="flap flap__btn" id="exit">
                                Thoát
                            </Link>
                            <div className="flap outer flap--right"/>
                        </div>
                    </div>
                )}

                {
                    this.state.start && (
                        <div className="overlay-text visible" id="countdown">
                            <div className="demo">
                                <div className="demo__colored-blocks">
                                    <div className="demo__colored-blocks-rotater">
                                        <div className="demo__colored-block"/>
                                        <div className="demo__colored-block"/>
                                        <div className="demo__colored-block"/>
                                    </div>
                                    <div className="demo__colored-blocks-inner"/>
                                    <div className="demo__text">Ready</div>
                                </div>
                                <div className="demo__inner">
                                    <svg className="demo__numbers" viewBox="0 0 100 100">
                                        <defs>
                                            <path className="demo__num-path-1" d="M40,28 55,22 55,78"/>
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
                    )
                }

                <div
                    className="row center"
                    style={{display: "flex", justifyContent: "space-between"}}
                >
                    <div className="col-sm-1">
                        <Link to="/home-page">
                            <img
                                src="/Images/LoginPage/Back_Button.png"
                                alt=""
                                style={{width: "200%", marginLeft: "-190px"}}
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
                                <span id="Timer">Thời gian {this.state.minutes}:{this.state.seconds}</span>
                            </div>
                            <div className="score col-md-3">
                                <span style={{fontSize: "22px"}}>Điểm: {this.state.score}</span>
                            </div>
                            <div className="col-md-1"/>
                        </div>
                    </div>
                </div>
                <div className="row center background-color-white game-aphabet mt-4">
                    <div
                        className="game-number-row"
                        id="game-number-row-question"
                        style={{textAlign: "center"}}
                    >
                        {this.state.isCorrectAnswer ? (
                            <QuestionNumber code={this.state.number}/>
                        ) : !this.state.isHidden ? (
                            <a>
                                <img
                                    src="/Images/Unit_Number/Answer_Card/Answer_hidden.png"
                                    width="50%"
                                    onClick={() => this.toSpeak(this.state.number)}
                                />
                            </a>
                        ) : ""}
                    </div>
                    <AnswerNumber
                        answer={this.state.answer}
                        win={() => this.win()}
                        redirectAnswer={() => this.redirectAnswer()}
                        showAnswer={() => this.showAnswer()}
                        redirectNoAnswer={() => this.redirectNoAnswer()}
                    />
                </div>
            </div>
        );
    }
}

export default UnitNumber;
