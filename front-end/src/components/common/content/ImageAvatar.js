import React, { Component } from 'react';

class ImageAvatar extends Component {
    render() {
        return (
                <div style={{flexDirection: 'column'}}>
                    <img src={this.props.image} width="80%" height="65%" style={{marginTop:'20px'}}></img>
                    <br/>
                    <label style={{fontSize: '16px'}}>{this.props.level}</label>
                </div>
        )
    }
}

export default ImageAvatar;