import React, {Component} from 'react';
import {FlipFlopDidMount} from "../common/js/FlipFlop"



class UnitAphabet extends Component {
    componentDidMount() {
        FlipFlopDidMount();
    }

    

    render() {
        return (
            <div className="container unit-aphabet" >
                <div className="overlay-text visible">
                    Click to Start
                </div>
                <div id="gameOverText" className="overlay-text">
                    GAME OVER!
                    <span className="overlay-text-small">Click to Restart</span>
                </div>
                <div id="winText" className="overlay-text">
                    YOU WIN!
                    <span className="overlay-text-small">Click to Restart</span>
                </div>
                <div className="row center">
                    <div className="col-md-4 img-cat">
                        <img src="Images/Avatar/Cat/Cat_normal.png" alt="" id="img-cat"/>
                    </div>
                    <div className="col-md-8" >
                        <div className="time-bar row" id="gameInfoBlock">
                            <div className="time col-md-8">
                                <span id="Timer">Thời gian: 2:00</span>
                            </div>
                            <div className="point col-md-3">
                                <span id="Point">Điểm: 0</span>
                            </div>
                            <div className="col-md-1">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row center background-color-white game-aphabet box-shadow mt-4">
                    <div className="game-aphabet-row" id="game-aphabet-row-one">
                    </div>
                    <div className="game-aphabet-row" id="game-aphabet-row-two">
                    </div>
                    <div className="game-aphabet-row" id="game-aphabet-row-three">
                    </div>
                </div>
            </div>
        );
    }
}

export default UnitAphabet;