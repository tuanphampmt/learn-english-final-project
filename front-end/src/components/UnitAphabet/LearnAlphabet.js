import React, { Component } from 'react';
import { Link } from "react-router-dom";
var title1 = "/Images/Avatar/Cat/Cat_normal_noborder_1.png"
var title2 = "/Images/Avatar/Cat/Cat_read_noborder_1.png"
var Aa = "/Images/Characters_Alphabet/Aa.png"
var Bb = "/Images/Characters_Alphabet/Bb.png"
var Cc = "/Images/Characters_Alphabet/Cc.png"
var Dd = "/Images/Characters_Alphabet/Dd.png"
var Ee = "/Images/Characters_Alphabet/Ee.png"
var Ff = "/Images/Characters_Alphabet/Ff.png"
var Gg = "/Images/Characters_Alphabet/Gg.png"
var Hh = "/Images/Characters_Alphabet/Hh.png"
var Ii = "/Images/Characters_Alphabet/Ii.png"
var Jj = "/Images/Characters_Alphabet/Jj.png"
var Kk = "/Images/Characters_Alphabet/Kk.png"
var Ll = "/Images/Characters_Alphabet/Ll.png"
var Mm = "/Images/Characters_Alphabet/Mm.png"
var Nn = "/Images/Characters_Alphabet/Nn.png"
var Oo = "/Images/Characters_Alphabet/Oo.png"
var Pp = "/Images/Characters_Alphabet/Pp.png"
var Qq = "/Images/Characters_Alphabet/Qq.png"
var Rr = "/Images/Characters_Alphabet/Rr.png"
var Ss = "/Images/Characters_Alphabet/Ss.png"
var Tt = "/Images/Characters_Alphabet/Tt.png"
var Uu = "/Images/Characters_Alphabet/Uu.png"
var Vv = "/Images/Characters_Alphabet/Vv.png"
var Ww = "/Images/Characters_Alphabet/Ww.png"
var Xx = "/Images/Characters_Alphabet/Xx.png"
var Yy = "/Images/Characters_Alphabet/Yy.png"
var Zz = "/Images/Characters_Alphabet/Zz.png"

class LearnAlphabet extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { 
            images: [
            { key: "1", title: title2, image: Aa, code: "A" },
            { key: "2", title: title2, image: Bb, code: "B" }, 
            { key: "3", title: title2, image: Cc, code: "C" }, 
            { key: "4", title: title2, image: Dd, code: "D" },
            { key: "5", title: title2, image: Ee, code: "E" }, 
            { key: "6", title: title2, image: Ff, code: "F" }, 
            { key: "7", title: title2, image: Gg, code: "G" }, 
            { key: "8", title: title2, image: Hh, code: "H" }, 
            { key: "9", title: title2, image: Ii, code: "I" }, 
            { key: "10" ,title: title2, image: Jj, code: "J" }, 
            { key: "11" ,title: title2, image: Kk, code: "K" }, 
            { key: "12" ,title: title2, image: Ll, code: "L" }, 
            { key: "13" ,title: title2, image: Mm, code: "M" }, 
            { key: "14" ,title: title2, image: Nn, code: "N" }, 
            { key: "15" ,title: title2, image: Oo, code: "O" }, 
            { key: "16" ,title: title2, image: Pp, code: "P" }, 
            { key: "17" ,title: title2, image: Qq, code: "Q" }, 
            { key: "18" ,title: title2, image: Rr, code: "R" }, 
            { key: "19" ,title: title2, image: Ss, code: "S" }, 
            { key: "20" ,title: title2, image: Tt, code: "T" }, 
            { key: "21" ,title: title2, image: Uu, code: "U" }, 
            { key: "22" ,title: title2, image: Vv, code: "V" }, 
            { key: "23" ,title: title2, image: Ww, code: "W" }, 
            { key: "24" ,title: title2, image: Xx, code: "X" }, 
            { key: "25" ,title: title2, image: Yy, code: "Y" }, 
            { key: "26" ,title: title2, image: Zz, code: "Z" }],
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
                                <Link to="/learn-aphabet/1" onClick={() => this.onChangeImg("A")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/A.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/2" onClick={() => this.onChangeImg("B")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/B.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/3" onClick={() => this.onChangeImg("C")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/C.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/4" onClick={() => this.onChangeImg("D")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/D.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/5" onClick={() => this.onChangeImg("E")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/E.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/6" onClick={() => this.onChangeImg("F")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/F.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/7" onClick={() => this.onChangeImg("G")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/G.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/8" onClick={() => this.onChangeImg("H")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/H.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/9" onClick={() => this.onChangeImg("I")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/I.png" alt="" width="100px" height="100px" />
                                </Link><br />
                                <Link to="/learn-aphabet/10" onClick={() => this.onChangeImg("J")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/J.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/11" onClick={() => this.onChangeImg("K")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/K.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/12" onClick={() => this.onChangeImg("L")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/L.png" alt="" width="100px" height="100px" />
                                    </Link>
                                <Link to="/learn-aphabet/13" onClick={() => this.onChangeImg("M")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/M.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/14" onClick={() => this.onChangeImg("N")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/N.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/15" onClick={() => this.onChangeImg("O")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/O.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/16" onClick={() => this.onChangeImg("P")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/P.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/17" onClick={() => this.onChangeImg("Q")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/Q.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/18" onClick={() => this.onChangeImg("R")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/R.png" alt="" width="100px" height="100px" />
                                </Link><br />
                                <Link to="/learn-aphabet/19" onClick={() => this.onChangeImg("S")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/S.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/20" onClick={() => this.onChangeImg("T")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/T.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/21" onClick={() => this.onChangeImg("U")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/U.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/22" onClick={() => this.onChangeImg("V")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/V.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/23" onClick={() => this.onChangeImg("W")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/W.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/24" onClick={() => this.onChangeImg("X")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/X.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/25" onClick={() => this.onChangeImg("Y")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/Y.png" alt="" width="100px" height="100px" />
                                </Link>
                                <Link to="/learn-aphabet/26" onClick={() => this.onChangeImg("Z")}>
                                    <img src="/Images/Unit_Aphabet/Normal Cards/Z.png" alt="" width="100px" height="100px" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="detailAlphabet" onClick={() => this.toSpeak(this.state.code)}>
                            <img src={this.state.title} style={{width: '40%'}} ></img>
                            <img src={this.state.image} style={{width: '40%'}}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LearnAlphabet;