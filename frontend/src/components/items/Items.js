import React, { Component } from 'react';
import axios from 'axios';
import CardItem from '../items/CardItem';

export default class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get('/items')
        .then(res => {
            this.setState({
                items: res.data
            })
        })
        .catch((err => {
            console.log(err)
        }))
    }

    render() {
        const items = this.state.items;
        console.log(items);
        return (
            <div className="py-5 back-color ">
            <div className="container d-flex justify-content-space-around" style={{justifyContent: 'center'}}>
                <div className="ui link cards">
                    <div className="row" style={{display: 'flex', justifyContent: 'center'}}>
                        {items.map(item => <CardItem
                            key={item.uniqueID}
                            item={item}
                        />)}
                    </div>
                </div>
            </div>
          </div>
        )
    }
}
