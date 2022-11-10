import React from "react";


import classes from './Header.module.css';


const Header = () => {
    return (
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Your Cart</button>
        </header>
    );
};

export default Header;