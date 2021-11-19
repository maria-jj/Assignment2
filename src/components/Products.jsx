import React, {Component} from "react";

class Products extends Component {
    setProduct(id) {
        localStorage.setItem("category_id", this.props.data.category_id.toString())
        localStorage.setItem("product_id", id.toString())
    
    }

    render() {
        return (
            <div className="category">
                <h3>
                    {this.props.data.category}
                </h3>
                <div className="products">
                    {
                        this.props.data.products.map((prod) => {
                            if (this.props.product) {
                                if (prod.id === this.props.product.id) {
                                    return;
                                }
                            }
                            return (
                                <a className="product" key={prod.id}  href="/product" onClick={() => this.setProduct(prod.id)}>
                                    <img src={prod.image} alt="img"/>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Products;





