import React, { Component } from "react";
import { FlipFlopDidMount } from "../common/js/FlipFlop";
import { DialogDidMount } from "../common/js/Dialog";
import {Link} from "react-router-dom"
class UnitAphabet extends Component {
  componentDidMount() {
    FlipFlopDidMount();
    DialogDidMount();
  }

  render() {
    return (
      <div className="container unit-aphabet">
        {/* <div id="gameOverText" className="overlay-text">
          GAME OVER!
          <span className="overlay-text-small">Click to Restart</span>
        </div>
        <div id="winText" className="overlay-text">
          YOU WIN!
          <span className="overlay-text-small">Click to Restart</span>
        </div> */}
        {/* <div className="overlay-text"> */}
          <div id="js-panel" className="panel">
            <div className="panel__content">
              <h4 id="notify"></h4>
              <h2>Bạn đạt <span id="point-game">0</span> điểm</h2>
              <p id="description"></p>
            </div>
            <div className="panel__flaps">
              <div className="flap outer flap--left" />
              <Link className="flap flap__btn" id="play-again">Chơi lại</Link>
              <Link  to="/homePage" className="flap flap__btn" id="exit">Thoát</Link>
              <div className="flap outer flap--right" />
            </div>
          </div>
        {/* </div> */}

        {/* countdown */}
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

        <div className="row center">
          <div className="col-md-4 img-cat">
            <img src="Images/Avatar/Cat/Cat_normal.png" alt="" id="img-cat" className="img-thumbnail"/>
          </div>
          <div className="col-md-8">
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
          <div className="game-aphabet-row" id="game-aphabet-row-one"></div>
          <div className="game-aphabet-row" id="game-aphabet-row-two"></div>
          <div className="game-aphabet-row" id="game-aphabet-row-three"></div>
        </div>
      </div>
    );
  }
}

export default UnitAphabet;