
import { Routes, Route } from "react-router-dom";

import RecipieExample from "./pages/RecipieExample";
 import MealsAcCat from "./pages/MealsAcCat"
 import FinalRecipe from "./pages/FinalRecipe"
function App() {
  return (
    <>
      <Routes>
        {/* for homepage */}
        <Route path="/" element={<RecipieExample />} />

        {/* for other pages */}
        <Route path="/category/:categoryName" element={<MealsAcCat />} />
        <Route path="/category/:categoryName/id" element={<FinalRecipe />} />
      </Routes>
    </>
  );
}

export default App;
