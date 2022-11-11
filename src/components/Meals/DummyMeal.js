import React from "react";
import Card from "../UI/Card";

import classes from './DummyMeal.module.css';
import MealItem from "./MealItem/MealItem";

const dummy_meals = [
    {
        id: 'm1',
        fooditem: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99
    },
    {
        id: 'm2',
        fooditem: 'Schnitzel',
        description: 'A german speciality!',
        price:16.50
    },
    {
        id: 'm3',
        fooditem: 'Barbecque Burger',
        description: 'American, raw, meaty',
        price: 12.99
    },
    {
        id: 'm4',
        fooditem: 'Green Bowl',
        description: 'Healthy....green...',
        price:18.99
    },
  ];

const DummyMeal = (props) => {
    const mealsList = dummy_meals.map((meal) => (
       <MealItem 
            key = {meal.id}
            fooditem = {meal.fooditem}
            description = {meal.description}
            price = {meal.price}
       />
    ))
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};

export default DummyMeal;