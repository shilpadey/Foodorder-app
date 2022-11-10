import React from "react";

import classes from './DummyMeal.module.css';

const dummy_meals = [
    {
        id: 'm1',
        fooditem: 'Sushi',
        description: 'Finest fish and veggies',
        amount: 22.99
    },
    {
        id: 'm2',
        fooditem: 'Schnitzel',
        description: 'A german speciality!',
        amount:16.50
    },
    {
        id: 'm3',
        fooditem: 'Barbecque Burger',
        description: 'American, raw, meaty',
        amount: 12.99
    },
    {
        id: 'm4',
        fooditem: 'Green Bowl',
        description: 'Healthy....green...',
        amount:18.99
    },
  ];

const DummyMeal = (props) => {
    const mealsList = dummy_meals.map((meal) => (
        <li>
            {meal.fooditem}
            {meal.description}
            {meal.amount}
        </li>
    ))
    return (
        <section className={classes['meal-item']}>
            <ul>
                {mealsList}
            </ul>
        </section>
    );
};

export default DummyMeal;