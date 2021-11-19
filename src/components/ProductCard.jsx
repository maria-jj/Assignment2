import React, {Component} from "react";

class ProductCard extends Component {
    render() {
        return (
            <div className="product-card">
                <img src={this.props.product.image} alt="img"/>
                <div className="details">
                    <h2>{this.props.product.title}</h2>
                    <div> Price: {this.props.product.price}</div>
                    <div>
                        Details:
                        {
                            (this.props.category === 0) ?
                                (
                                    <ul>
                                        <li>Publisher : {this.props.product.details.Publisher}</li>
                                        <li>Language : {this.props.product.details.Language}</li>
                                        <li>Paperback : {this.props.product.details.Paperback}</li>
                                        <li>ISBN-13 : {this.props.product.details.ISBN}</li>
                                        <li>Item weight : {this.props.product.details.Weight}</li>
                                        <li>Dimensions : {this.props.product.details.Dimensions}</li>
                                        <li>Best Sellers Rank : {this.props.product.details.rank}</li>
                                        <li>Customer Reviews : {this.props.product.details.reviews}</li>
                                    </ul>

                                ) : (
                                    <ul>
                                        <li>Series : {this.props.product.details.Series}</li>
                                        <li>Brand : {this.props.product.details.Brand}</li>
                                        <li>Specific Uses For Product : {this.props.product.details.Sufp}</li>
                                        <li>Screen Size : {this.props.product.details.SS}</li>
                                        <li>Operating System : {this.props.product.details.OS}</li>
                                        <li>Human Interface Input : {this.props.product.details.HII}</li>
                                        <li>CPU Manufacturer : {this.props.product.details.CPU}</li>
                                        <li>Color : {this.props.product.details.Color}</li>
                                    </ul>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;