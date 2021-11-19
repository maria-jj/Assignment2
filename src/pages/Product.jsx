import React, {Component} from "react";
import ProductCard from "../components/ProductCard"
import Products from "../components/Products";

class Product extends Component {

    render() {
        return (
            <div className="product-page">
                <ProductCard category={this.props.data.category_id} product={this.props.product}/>
                <Products data={this.props.data} product={this.props.product}/>
            </div>
        )
    }
}

export default Product;





