import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import "./Items.css";

export default class CardItem extends Component {
    
    render() {
            const name = this.props.item.name || "problem"
            const partNumber = this.props.item.partNumber || "problem"
            const formattedOfferPrice = this.props.item.prices.formattedOfferPrice || "problem"
            const thumbnailImage = this.props.item.thumbnailImage || "problem"
            const shortDescription = this.props.item.shortDescription || "problem"
        return (
          <Link className="a-card" to={`/details/${partNumber}`}>
            <Card
              image={thumbnailImage}
              header={name}
              description={"Precio oferta: " + formattedOfferPrice}
              extra={shortDescription}
            />
          </Link>
        )
    }
}
