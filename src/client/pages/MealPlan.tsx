import React, { useState } from "react";
import MealList from "../components/MealList";
import config from "../../server/config";

import { fetchMealDataFromApi } from "../utils/apiFetch";
import { BASE_URL } from "../utils/apiFetch";
import { IMealPlanNutrients } from "../../server/types";

const MealPlan = () => {
  const [mealData, setMealData] = useState<IMealPlanNutrients>({});
  const [calories, setCalories] = useState(2000);

  const handleChange = (e: { target: { value: any } }) => {
    setCalories(Number(e.target.value));
  };
  const getMealData = async (e: HTMLButtonElement, mealData: IMealPlanNutrients) => {
    await fetchMealDataFromApi(
      `${BASE_URL}/recipes/mealplans/generate?apiKey=${config.recipeAPIKey}/timeFrame=day&targetCalories=${calories}`
    ).then(() => setMealData(mealData));
  };
  return (
    <>
      <section className="controls">
        <input type="number" placeholder="Calories (e.g. 2000)" onChange={handleChange} />
      </section>
      <button onClick={(e) => getMealData}>Get Meal Plan</button>
      {mealData && <MealList mealData={mealData} />}
    </>
  );
};

export default MealPlan;
