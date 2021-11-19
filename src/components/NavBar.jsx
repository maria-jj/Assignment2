import React, {Component} from "react";
class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <a>All</a>
                <div className="nav-categories">
                    <a href="#">Amazon Basics</a>
                    <a href="#">Buy Again</a>
                    <a href="#">Customer Service</a>
                    <a href="#">Prime</a>
                    <a href="#">Best Sellers</a>
                    <a href="#">Browsing History</a>
                    <a href="#">Early Black Friday Deals</a>
                    <a href="#">Maryam's Amazon.com</a>
                    <a href="#">Groceries</a>
                    <a href="#">Kindle Books</a>
                </div>
                <a>Shop kids' gifts</a>

            </div>

        )
    }
}

export default NavBar;