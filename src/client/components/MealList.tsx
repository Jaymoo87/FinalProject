import React from "react";
// import Meal from "./Meal";

const MealList = ({ mealData }: any) => {
  const nutrients = mealData.nutrients;
  return (
    <main>
      <section className="nutrients">
        <h1>Macros</h1>
        <ul>
          <li>Calories: {nutrients.calories.toFixed(0)}</li>
          <li>Carbs: {nutrients.carbohydrates.toFixed(0)}</li>
          <li>Fat: {nutrients.fat.toFixed(0)}</li>
          <li>Protein: {nutrients.protein.toFixed(0)}</li>
        </ul>
      </section>
    </main>
  );
};

export default MealList;
