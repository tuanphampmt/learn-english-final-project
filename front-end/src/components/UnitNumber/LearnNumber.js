import React, { Component } from 'react';
import { Link } from "react-router-dom";
var title1 = "/Images/Avatar/Cat/Cat_normal_noborder_1.png"
var title2 = "/Images/Avatar/Cat/Cat_read_noborder_1.png"
var N0 = "/Images/Unit_Number/Character/N0.png"
var N1 = "/Images/Unit_Number/Character/N1.png"
var N2 = "/Images/Unit_Number/Character/N2.png"
var N3 = "/Images/Unit_Number/Character/N3.png"
var N4 = "/Images/Unit_Number/Character/N4.png"
var N5 = "/Images/Unit_Number/Character/N5.png"
var N6 = "/Images/Unit_Number/Character/N6.png"
var N7 = "/Images/Unit_Number/Character/N7.png"
var N8 = "/Images/Unit_Number/Character/N8.png"
var N9 = "/Images/Unit_Number/Character/N9.png"
class LearnNumber extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { 
            images: [
                { key: "0", title: title2, image: N0, code: "0" },
                { key: "1", title: title2, image: N1, code: "1" },
                { key: "2", title: title2, image: N2, code: "2" }, 
                { key: "3", title: title2, image: N3, code: "3" }, 
                { key: "4", title: title2, image: N4, code: "4" },
                { key: "5", title: title2, image: N5, code: "5" }, 
                { key: "6", title: title2, image: N6, code: "6" }, 
                { key: "7", title: title2, image: N7, code: "7" }, 
                { key: "8", title: title2, image: N8, code: "8" }, 
                { key: "9", title: title2, image: N9, code: "9" }],
                title: title1, image: "", code: ""
        }
    }

    toSpeak = (message) => {
        var speechSynthesisUtterance = new SpeechSynthesisUtterance(message);
        speechSynthesisUtterance.lang = "en-UK";
        window.speechSynthesis.speak(speechSynthesisUtterance);
    }

    onChangeImg = (code) => {
        const {images} = this.state;
        const img = images.find(img => img.code === code);
        if (img) {
            this.setState({ title: img.title })
            this.setState({ image: img.image })
            this.setState({ code: img.code })
            this.toSpeak(img.code)
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row" style={{ marginTop: '20px', display: 'flex' }}>
                        <div className="col-sm-1">
                            <Link to="/homePage">
                                <img src="/Images/LoginPage/Back_Button.png" alt="" style={{ width: '200%' }} />
                            </Link>
                        </div>
                        <div className="col-sm-11">
                            <div className="menu" style={{ textAlign: 'center' }}>
                                <Link to="/learn-number/0" onClick={() => this.onChangeImg("0")}>
                                    <img src="/Images/Unit_Number/Learn/1.png" alt="" width="150px" height="150px" />
                                </Link>
                                <Link to="/learn-number/1" onClick={() => this.onChangeImg("1")}>
                                    <img src="/Images/Unit_Number/Learn/0.png" alt="" width="150px" height="150px" />
                                </Link>
                                <Link to="/learn-number/2" onClick={() => this.onChangeImg("2")}>
                                    <img src="/Images/Unit_Number/Learn/2.png" alt="" width="150px" height="150px" />
                                </Link>
                                <Link to="/learn-number/3" onClick={() => this.onChangeImg("3")}>
                                    <img src="/Images/Unit_Number/Learn/3.png" alt="" width="150px" height="150px" />
                                </Link>
                                <Link to="/learn-number/4" onClick={() => this.onChangeImg("4")}>
                                    <img src="/Images/Unit_Number/Learn/4.png" alt="" width="150px" height="150px" />
                                </Link>
                                <br />
                                <Link to="/learn-number/5" onClick={() => this.onChangeImg("5")}>
                                    <img src="/Images/Unit_Number/Learn/5.png" alt="" width="150px" height="150px" />
                                </Link>
                                <Link to="/learn-number/6" onClick={() => this.onChangeImg("6")}>
                                    <img src="/Images/Unit_Number/Learn/6.png" alt="" width="150px" height="150px" />
                                </Link>
                                <Link to="/learn-number/7" onClick={() => this.onChangeImg("7")}>
                                    <img src="/Images/Unit_Number/Learn/7.png" alt="" width="150px" height="150px" />
                                </Link>
                                <Link to="/learn-number/8" onClick={() => this.onChangeImg("8")}>
                                    <img src="/Images/Unit_Number/Learn/8.png" alt="" width="150px" height="150px" />
                                </Link>
                                <Link to="/learn-number/9" onClick={() => this.onChangeImg("9")}>
                                    <img src="/Images/Unit_Number/Learn/9.png" alt="" width="150px" height="150px" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="detailNumber" onClick={() => this.toSpeak(this.state.code)}>
                            <img src={this.state.title} style={{width: '45%'}} ></img>
                            <img src={this.state.image} style={{width: '40%'}}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LearnNumber;