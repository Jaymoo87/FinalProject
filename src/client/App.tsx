import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MealPlan from "./pages/MealPlan";
import Search from "./pages/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/" element={<MealPlan />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
