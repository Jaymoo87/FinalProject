import axios from "axios";
import config from "../../server/config";

export const BASE_URL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";

const mealPlanReqOptions = {
  method: "GET",
  url: `${BASE_URL}/recipes/mealplans/generate?apiKey=${config.recipeAPIKey}/`,
  params: {
    timeFrame: "day",
    targetCalories: "2000",
    diet: "vegetarian",
    exclude: "shellfish, olives",
  },
  headers: {
    "X-RapidAPI-Key": config.recipeAPIKey,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

axios
  .request(mealPlanReqOptions)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export const fetchMealDataFromApi = async (url: string) => {
  const { data } = await axios.get(`${url}`, mealPlanReqOptions);
  return data;
};

const options = {
  method: "GET",
  url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
  params: { tags: "vegetarian,dessert", number: "1" },
  headers: {
    "X-RapidAPI-Key": config.recipeAPIKey,
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
