import React, {Component} from "react";
import logo from "../assets/logo.png"
import search from "../assets/icons/search.svg"
import cart from "../assets/icons/cart.png"




class Header extends Component {
    render() {
        return (
            <div className="header">
                <a href="/" className="logo" >
                    <img src={logo} alt="logo"/>
                </a>
                <a className="address">
                    <span>Deliver to Maryam</span>
                    <span>Address</span>
                </a>
                <form className="search-form">
                    <select>
                        <option value="all" defaultValue>All</option>
                        <option value="books">Books</option>
                        <option value="laptops">Laptops</option>
                    </select>
                    <input type="text" id="search" name="search" placeholder="Search"/>
                    <img src={search} alt="search"/>
                </form>
                <select className="lang">
                    <option value="us" defaultValue>us</option>
                    <option value="fr">fr</option>
                </select>
                <a className="returns">
                    Returns <br/> <span>& Orders</span>
                </a>
                <a className="cart">
                    <div>
                        <img src={cart} alt="cart"/>
                    </div>
                    <span> Cart</span>
                </a>
            </div>
        )
    }
}

export default Header;