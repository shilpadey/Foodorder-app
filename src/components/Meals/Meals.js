import React from "react";
import DummyMeal from "./DummyMeal";
import MealsSummary from "./MealsSummary"

const Meals = () => {
    return (
        <React.Fragment>
            <MealsSummary />
            <DummyMeal />
        </React.Fragment>
    );
};

export default Meals;