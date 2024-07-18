import Button from "react-bootstrap/esm/Button.js";
import "./pageBody.css";
import "./common.css";
import RecipeCard from "./RecipeCard.js";
import AddRecipe from "./AddRecipe.js";
import { getData } from "../fetch/api.js";
import { useEffect, useState } from "react";

export default function PageBody() {
  const [recipes, setRecipes] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentEditRecipe, setCurrentEditRecipe] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setRecipes(data);
    }

    fetchData();
  }, []);

  return (
    <div className="body-grid">
      <div className="body-flex">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card-around">
            <RecipeCard
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              currentEditRecipe={currentEditRecipe}
              setCurrentEditRecipe={setCurrentEditRecipe}
              recipes={recipes}
              setRecipes={setRecipes}
              key={recipe.id}
              recipe={recipe}
            ></RecipeCard>
          </div>
        ))}
      </div>

      <div className="margin-left-top-10">
        <AddRecipe
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          recipes={recipes}
          setRecipes={setRecipes}
          currentEditRecipe={currentEditRecipe}
        ></AddRecipe>
      </div>
    </div>
  );
}
