import React from "react";

import mealsImage from '../../assests/meals.jpg';
import MealsSummary from "../Meals/MealsSummary";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";


const Header = () => {
    return (
        <React.Fragment>
           <header className={classes.header}>
             <h1>ReactMeals</h1>
             <HeaderCartButton />
           </header>
           <div className={classes['main-image']}>
             <img src={mealsImage} alt="A table of delicious meals!" />
           </div>
           <MealsSummary /> 
        </React.Fragment>
        
    );
};

export default Header;