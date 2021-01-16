import React, { Component } from 'react';
import axios from 'axios';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: []
        }
    }

    componentDidMount() {
        const partNumber = this.props.match.params.partNumber
        console.log("b" + partNumber)
        axios.get(`/items/${partNumber}`)
        .then((res) => {
            console.log("c" + JSON.stringify(res.data));
            this.setState({
                item: res.data[0]
            })
        })
        .catch((err => {
            console.log(err)
        }))
    }

    handleClick = () => {
        this.props.history.push('/');
    }

    render() {
        const name = this.state.item.name
        const { formattedListPrice, formattedOfferPrice, discountPercentage, ripleyPuntos } = this.state.item.prices || "problem"
        const thumbnailImage = this.state.item.thumbnailImage || "problem"

        return (
            <div className="py-5 back-color ui grid">
                <div className="ui text container">
                    <img src={thumbnailImage} alt="ripley"/>
                    <ul>
                        <li className="detail-name detail">{name}</li>
                        <li className="detail-normal detail">
                            <span className="span-normal">Normal</span>
                            <span className="span-fullPrice text-right">{formattedListPrice}</span>
                        </li>
                        <li className="detail-tarjeta detail">
                            <span className="span-tarjeta">Tarjeta Ripley o check</span>
                            <span className="span-ripleyOffer">{formattedOfferPrice}</span>
                        </li>
                        <li className="detail-descuento detail">
                            <span className="span-descuento">Descuento</span>
                            <span className="span-discount">-{discountPercentage}%</span>
                        </li>
                        <li className="detail-puntos detail">
                            <span className="span-acumulas">Acumulas</span>
                            <span className="span-puntos">{ripleyPuntos} puntos</span>
                        </li>
                    </ul>
                </div>
               
          </div>
        )
    }
}
