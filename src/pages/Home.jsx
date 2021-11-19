import React, {Component} from "react";
import Products from "../components/Products";

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Products data={this.props.data[0]}/>
                <Products data={this.props.data[1]}/>
            </div>
        )
    }
}

export default Home;