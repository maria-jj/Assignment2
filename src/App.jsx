import React, {Component, useState} from "react";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";

import book1 from "./assets/books/book1.png";
import book2 from "./assets/books/book2.png";
import book3 from "./assets/books/book3.png";

import lenovoImg from "./assets/laptops/lenovo.jpg";
import macImg from "./assets/laptops/mac.jpg";
import hpImg from "./assets/laptops/hp.png";


export default class App extends Component{
    constructor(props) {
        super(props);
        if (!localStorage.getItem('category_id')) {
            localStorage.setItem("category_id", "0")
            localStorage.setItem("product_id", "0")
        }
    }
    render() {
        return (
            <Router>
                <Header/>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <Home data={data}/>
                    </Route>
                    <Route path="/product">
                        <Product data={data[localStorage.getItem("category_id")]}
                                 product={data[localStorage.getItem("category_id")].products[localStorage.getItem("product_id")]}
                        />
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}


const data = [
    {
        category_id: 0,
        category: "Books you may like",
        products: [
            {
                id: 0,
                "image": book1,
                "title": "The Power of Discipline: How to Use Self Control and Mental Toughness to Achieve Your Goals",
                "price": "$24.99",
                "details": {
                    "Publisher": "Independently published (April 8 2020)",
                    "Language": "English",
                    "Paperback": "126 pages",
                    "ISBN": "979-8631735408",
                    "Weight": "154 g",
                    "Dimensions": "13.97 x 0.74 x 21.59 cm",
                    "rank": "#3,001 in Books",
                    "reviews": "4.6 out of 5 star"
                }
            },
            {
                id: 1,
                "image": book2,
                "title": "The Philosophy Book: Big Ideas Simply Explained",
                "price": "$27.00",
                "details": {
                    "Publisher": "DK; Illustrated edition (Jan. 17 2011)",
                    "Language": "English",
                    "Paperback": "352 pages",
                    "ISBN": "978-0756668617",
                    "Weight": "1.16 kg",
                    "Dimensions": "20.32 x 2.67 x 24.13 cm",
                    "rank": "#8,191 in Books",
                    "reviews": "4.6 out of 5 star"
                }
            },
            {
                id: 2,
                "image": book3,
                "title": "The Fun Knowledge Encyclopedia: The Crazy Stories Behind the World's Most Interesting Facts",
                "price": "$19.63",
                "details": {
                    "Publisher": "CreateSpace Independent Publishing Platform (July 4 2017)",
                    "Language": "English",
                    "Paperback": "282 pages",
                    "ISBN": "978-1548667986",
                    "Weight": "281 g",
                    "Dimensions": "12.7 x 1.63 x 20.32 cm",
                    "rank": "#17,683 in Books",
                    "reviews": "4.5 out of 5 stars"
                }
            },
        ]
    },
    {
        category_id: 1,
        category: "Laptops you may like",
        products: [
            {
                "id": 0,
                "image": lenovoImg,
                "title": "Lenovo IdeaPad 3 Laptop, 14.0\" FHD (1920 x 1080) Display, AMD Ryzen 5 5500U Processor, 8GB DDR4 RAM, 256GB NVMe TLC SSD Storage, AMD Radeon 7 Graphics, Windows 11 Home, 82KT00GVUS, Abyss Blue",
                "price": "$559.99",
                "details": {
                    "Series": "Ideapad 3 14 Laptop",
                    "Brand": "Lenovo",
                    "Sufp": "Personal",
                    "SS": "14 Inches",
                    "OS": "Windows 11",
                    "HII": "Microphone",
                    "CPU": "AMD",
                    "Color": "Abyss Blue",
                }
            },
            {
                "id": 1,
                "image": macImg,
                "title": "2019 Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Silver ",
                "price": "$1199",
                "details": {
                    "Series": "MacBook Pro",
                    "Brand": "Apple",
                    "Sufp": "Multimedia, Personal, Business",
                    "SS": "16 Inches",
                    "OS": "Mac OS",
                    "HII": "Touch Pad",
                    "CPU": "Intel",
                    "Color": "Silver",
                }
            },
            {
                "id": 2,
                "image": hpImg,
                "title": "HP 2019 14\" Laptop - Intel Core i3 - 8GB Memory - 128GB Solid State Drive - Ash Silver Keyboard Frame (14-CF0014DX)",
                "price": "$941.85",
                "details": {
                    "Series": "HP",
                    "Brand": "HP",
                    "Sufp": "Personal, business",
                    "SS": "14 Inches",
                    "OS": "Windows 10",
                    "HII": "TrackPoint pointing device",
                    "CPU": "Intel",
                    "Color": "Black",
                }
            },
        ]
    }
];