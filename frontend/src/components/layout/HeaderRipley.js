import React, { Component } from 'react';
import logo from '../../img/logo.png';
import './HeaderRipley.css';
import { Header, Image } from 'semantic-ui-react';

export default class HeaderRipley extends Component {
    render() {
        return(
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="ui container">
                <Header as='h2' textAlign='center' color="white">
                    <Image name='Ripley' src={logo} color="white"/>
                        <Header.Content color="white">Ripley mini</Header.Content>
                </Header>
                </div>
            </div>
        )
    }
}
