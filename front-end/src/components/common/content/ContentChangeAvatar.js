import React, { Component } from 'react';

class ContentChangeAvatar extends Component {
    render() {
        return (
            <div className="change box-shadow">
                <div>
                    <img src="Images\HomePage\Dinosaur_normal.png" style={{ width: '28%', borderRadius: '12px', marginLeft:'40px', boxShadow: '5px 5px 5px grey'}} ></img>
                    <input className="box-shadow" type="text" value="name" style={{fontStyle:'italic', fontWeight: 'bold', borderRadius: '12px', border: 'none', marginLeft: '40px',paddingLeft: '20px'}}></input>
                </div>
            </div>
        );
    }
}

export default ContentChangeAvatar;