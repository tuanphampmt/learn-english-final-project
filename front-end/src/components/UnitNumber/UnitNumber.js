import React, {Component} from "react";
import {NumberDidMount} from "../common/js/Number"
import {DialogDidMount} from "../common/js/Dialog";
import {Link} from "react-router-dom";
import Auth from "../service/Auth";

class UnitNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answerCard: [
                {
                    ans: "Answer_0.png",
                    key: 0
                },
                {
                    ans: "Answer_1.png",
                    key: 1
                },
                {
                    ans: "Answer_2.png",
                    key: 2
                },
                {
                    ans: "Answer_3.png",
                    key: 3
                },
                {
                    ans: "Answer_4.png",
                    key: 4
                },
                {
                    ans: "Answer_5.png",
                    key: 5
                },
                {
                    ans: "Answer_6.png",
                    key: 6
                },
                {
                    ans: "Answer_7.png",
                    key: 7
                },
                {
                    ans: "Answer_8.png",
                    key: 8
                },
                {
                    ans: "Answer_9.png",
                    key: 9
                },
                {
                    ans: "Answer_hidden.png",
                    key: -1
                },
            ],
            questionCard: [
                {
                    ques: ["Zero_1.png", "Zero_2.png", "Zero_3.png"],
                    key: 0
                },
                {
                    ques: ["One_1.png", "One_2.png", "One_3.png"],
                    key: 1
                },
                {
                    ques: ["Two_1.png", "Two_2.png", "Two_3.png"],
                    key: 2
                },
                {
                    ques: ["Three_1.png", "Three_2.png", "Three_3.png"],
                    key: 3
                },
                {
                    ques: ["four_1.png", "four_2.png", "four_3.png"],
                    key: 4
                },
                {
                    ques: ["five_1.png", "five_2.png", "five_3.png"],
                    key: 5
                },
                {
                    ques: ["six_1.png", "six_2.png", "six_3.png"],
                    key: 6
                },
                {
                    ques: ["seven_1.png", "seven_2.png", "seven_3.png"],
                    key: 7
                },
                {
                    ques: ["eight_1.png", "eight_2.png", "eight_3.png"],
                    key: 8
                },
                {
                    ques: ["nine_1.png", "nine_2.png", "nine_3.png"],
                    key: 9
                }
            ],
            managementUnitNumber: {}
        }
    }

    componentDidMount() {
        // NumberDidMount(this.state.currentUser);
        // DialogDidMount();
        this.createAnswerAndQuestionRandom()
    }

    createAnswerAndQuestionRandom = () => {
        console.log(this.random(this.state.questionCard, 4))
        const question = this.random(this.state.questionCard, 4);
        const arrList = []
        question.forEach(item => {
            const answerCard = this.state.answerCard.find(e => e.key === item.key)
            if (answerCard) {
                arrList.push({
                    ...item,
                    ques: this.random(item.ques, 1)[0],
                    ans: answerCard.ans
                })
            }
        })
        Array(4)
        // 0: {ques: "Three_2.png", key: 3, ans: "Answer_3.png"}
        // 1: {ques: "Zero_1.png", key: 0, ans: "Answer_0.png"}
        // 2: {ques: "eight_3.png", key: 8, ans: "Answer_8.png"}
        // 3: {ques: "Two_3.png", key: 2, ans: "Answer_2.png"}
        console.log(arrList)
        this.setState({
            managementUnitNumber: {
                ques1: arrList[0].ques,
                ques2: arrList[1].ques,
                ques3: arrList[2].ques,
                ques3: arrList[2].ques,

            }
        })

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
    }

    render() {
        return (
            <div className="container unit-aphabet">
                <div id="js-panel" className="panel">
                    <div className="panel__content">
                        <h4 id="notify"></h4>
                        <h2>
                            Bạn đạt <span id="point-game">0</span> điểm
                        </h2>
                        <p id="description"></p>
                    </div>
                    <div className="panel__flaps">
                        <div className="flap outer flap--left"/>
                        <Link className="flap flap__btn" id="play-again">
                            Chơi lại
                        </Link>
                        <Link to="/home-page" className="flap flap__btn" id="exit">
                            Thoát
                        </Link>
                        <div className="flap outer flap--right"/>
                    </div>
                </div>
                {/* </div> */}

                {/* countdown */}
                {/* <div className="overlay-text visible" id="countdown">*/}
                {/*     <div className="demo">*/}
                {/*         <div className="demo__colored-blocks">*/}
                {/*             <div className="demo__colored-blocks-rotater">*/}
                {/*                 <div className="demo__colored-block"/>*/}
                {/*                 <div className="demo__colored-block"/>*/}
                {/*                 <div className="demo__colored-block"/>*/}
                {/*             </div>*/}
                {/*             <div className="demo__colored-blocks-inner"/>*/}
                {/*             <div className="demo__text">Ready</div>*/}
                {/*         </div>*/}
                {/*         <div className="demo__inner">*/}
                {/*             <svg className="demo__numbers" viewBox="0 0 100 100">*/}
                {/*                 <defs>*/}
                {/*                     <path className="demo__num-path-1" d="M40,28 55,22 55,78"/>*/}
                {/*                     <path*/}
                {/*                         className="demo__num-join-1-2"*/}
                {/*                         d="M55,78 55,83 a17,17 0 1,0 34,0 a20,10 0 0,0 -20,-10"*/}
                {/*                     />*/}
                {/*                     <path*/}
                {/*                         className="demo__num-path-2"*/}
                {/*                         d="M69,73 l-35,0 l30,-30 a16,16 0 0,0 -22.6,-22.6 l-7,7"*/}
                {/*                     />*/}
                {/*                     <path*/}
                {/*                         className="demo__num-join-2-3"*/}
                {/*                         d="M28,69 Q25,44 34.4,27.4"*/}
                {/*                     />*/}
                {/*                     <path*/}
                {/*                         className="demo__num-path-3"*/}
                {/*                         d="M30,20 60,20 40,50 a18,15 0 1,1 -12,19"*/}
                {/*                     />*/}
                {/*                 </defs>*/}
                {/*                 <path*/}
                {/*                     className="demo__numbers-path"*/}
                {/*                     d="M-10,20 60,20 40,50 a18,15 0 1,1 -12,19*/}
                {/*Q25,44 34.4,27.4*/}
                {/*l7,-7 a16,16 0 0,1 22.6,22.6 l-30,30 l35,0 L69,73 */}
                {/*a20,10 0 0,1 20,10 a17,17 0 0,1 -34,0 L55,83 */}
                {/*l0,-61 L40,28"*/}
                {/*                 />*/}
                {/*             </svg>*/}
                {/*         </div>*/}
                {/*     </div>*/}
                {/* </div>*/}

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
                            src="Images/Avatar/Cat/Cat_talk.png"
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
                    <div className="game-number-row" id="game-number-row-question">111111</div>
                    <div className="game-number-row" id="game-number-row-answer">11111</div>
                </div>
            </div>
        );
    }
}

export default UnitNumber;
