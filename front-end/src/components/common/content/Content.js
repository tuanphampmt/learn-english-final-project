import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { trangthai: 1}
    }

    rendernd1 = () => (
        <div className="hienthi1" id="nd1">
            <img src="Images/HomePage/Aphabet_Image.png" width="90%"></img><br />
            <label className="point">Điểm cao nhất: 1000</label>
            <div style={{display: 'flex', marginTop:'5%'}}>
                <Link to="/chude1"><img src="Images/HomePage/Learn_Button.png" width="90%"></img></Link>
                <Link to="/chude1"><img src="Images/HomePage/Play_Button.png" width="90%"></img></Link>
            </div>
        </div>
    )

    check = () => {
        if (this.state.trangthai === 1) {
            return this.rendernd1();
        }
    }

    displayTheme = (id) => {
        if (id === 1) {
            this.setState({ trangthai: 1 });
        }
    }

    render() {
        return (
            <section>
                <div className="chude box-shadow">
                    <div className="chude1 hinh">
                        <a href="#">
                            <img src="Images/HomePage/Aphabet_Image2.png" width="90%"></img>
                        </a>
                    </div> 
                </div>
                <div className="noidung box-shadow" style={{ textAlign: 'center' }}>
                    {this.check()}
                </div>
            </section>
        );
    }
}

export default Content;