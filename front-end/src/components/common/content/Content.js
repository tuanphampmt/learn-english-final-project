import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Auth from "../../service/Auth";
class Content extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {trangthai: 1,
            currentUser: Auth.getCurrentUser()}

    }

    rendernd1 = () => (
        <div className="aphabet-image">
            <img src="Images/HomePage/Aphabet_Image.png" width="90%"/>
            <label className="point">Điểm cao nhất: {this.state.currentUser.listScore[2].score}</label>
            <div style={{display: 'flex', marginTop: '5%'}}>
                <Link to="/learn-aphabet"><img src="Images/HomePage/Learn_Button.png" width="90%"/></Link>
                <Link to="/unit-aphabet"><img src="Images/HomePage/Play_Button.png" width="90%"/></Link>
            </div>
        </div>
    )

    rendernd2 = () => (
        <div className="aphabet-image">
            <img src="Images/HomePage/Number_Image.png" width="90%"></img>
            <label className="point">Điểm cao nhất: {this.state.currentUser.listScore[3].score}</label>
            <div style={{display: 'flex', marginTop: '5%'}}>
                <Link to="/learn-number"><img src="Images/HomePage/Learn_Button.png" width="90%"/></Link>
                <Link to="/unit-number/one"><img src="Images/HomePage/Play_Button.png" width="90%"/></Link>
            </div>
        </div>
    )

    rendernd3 = () => (
        <div className="aphabet-image">
            <img src="Images/HomePage/Number_Image.png" width="90%"></img>
            <label className="point">Điểm cao nhất: {this.state.currentUser.listScore[0].score}</label>
            <div style={{display: 'flex', marginTop: '5%'}}>
                <Link to="/learn-color"><img src="Images/HomePage/Learn_Button.png" width="90%"/></Link>
                <Link to="/unit-color"><img src="Images/HomePage/Play_Button.png" width="90%"/></Link>
            </div>
        </div>
    )

    rendernd4 = () => (
        <div className="aphabet-image">
            <img src="Images/HomePage/Aphabet_Image.png" width="90%"></img>
            <label className="point">Điểm cao nhất: {this.state.currentUser.listScore[1].score}</label>
            <div style={{display: 'flex', marginTop: '5%'}}>
                <Link to="/learn-animal"><img src="Images/HomePage/Learn_Button.png" width="90%"/></Link>
                <Link to="/unit-animal"><img src="Images/HomePage/Play_Button.png" width="90%"/></Link>
            </div>
        </div>
    )

    check = () => {
        if (this.state.trangthai === 1) {
            return this.rendernd1();
        } 
        if (this.state.trangthai === 2) {
            return this.rendernd2();
        } 
        if (this.state.trangthai === 3) {
            return this.rendernd3();
        }
        if (this.state.trangthai === 4) {
            return this.rendernd4();
        }
    }

    displayTheme = (id) => {
        if (id === 1) {
            this.setState({trangthai: 1});
        } 
        if (id === 2 ){
            this.setState({trangthai: 2});
        }   
        if (id === 3 ) {  
            this.setState({trangthai: 3});
        }
        if (id === 4 ) {
            this.setState({trangthai: 4});
        }
    }

    render() {
        return (
            <section className="home-page">
                <div></div>
                <div></div>
                <div></div>
                <div className="chude box-shadow">
                    <div className="chude1 hinh">
                        <a href="#" onClick={() => this.displayTheme(1)}>
                            <img src="Images/HomePage/Alphabet_Image2.png" width="90%"></img>
                        </a>
                    </div>
                    <div className="chude2 hinh">
                        <a href="#" onClick={() => this.displayTheme(2)}>
                            <img src="Images/HomePage/Number_Image2.png" width="90%"></img>
                        </a>
                    </div>
                    <div className="chude2 hinh">
                        <a href="#" onClick={() => this.displayTheme(3)}>
                            <img src="Images/HomePage/Number_Image2.png" width="90%"></img>
                        </a>
                    </div>
                    <div className="chude2 hinh">
                        <a href="#" onClick={() => this.displayTheme(4)}>
                            <img src="Images/HomePage/Alphabet_Image2.png" width="90%"></img>
                        </a>
                    </div>
                </div>
                <div className="noidung box-shadow" style={{textAlign: 'center'}}>
                    {this.check()}
                </div>
                <div></div>
                <div></div>
                <div></div>

            </section>
        );
    }
}

export default Content;