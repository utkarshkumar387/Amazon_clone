import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket }] = useStateValue();


    return (
        <div className="header">
            <Link to="/">
                <h4 className="header_logo">LOGO</h4>
            </Link>
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon"></SearchIcon>
            <div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello Bittu</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Return</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="header_basket header_optionLineOne">
                        <ShoppingBasketIcon />
                        <span className="header_basketCount header_optionLineTwo">{basket.length}</span>
                    </div>
                </Link>

            </div>
        </div>

    );
}

export default Header
