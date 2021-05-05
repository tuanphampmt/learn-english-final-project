import React, { Component } from 'react';
import Header from '../common/header/Header';
import Content from '../common/content/Content';

class HomePage extends Component {
    render() {
        return (
            <div className="center w-100" style={{flexDirection: 'column'}}>
                <Header></Header>
                <Content></Content>
            </div>
        );
    }
}

export default HomePage;