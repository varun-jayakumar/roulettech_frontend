import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./recipeCard.css";
import { deleteData } from "../fetch/api.js";

const RecipeCard = ({
  recipe,
  setRecipes,
  recipes,
  currentEditRecipe,
  setCurrentEditRecipe,
  isEdit,
  setIsEdit,
}) => {
  function handleDelete() {
    const id = recipe.id;
    deleteData(id);
    const newRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(newRecipes);
  }

  function handleEdit() {
    setCurrentEditRecipe(recipe);
    setIsEdit(true);
  }

  return (
    <div>
      <Card
        style={{
          width: "100%",
          background: "",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Card.Body>
          <Card.Title>{recipe.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {recipe.cuisine}
          </Card.Subtitle>
          <Card.Text>{recipe.ingredients}</Card.Text>
          <Card.Text>{recipe.instructions}</Card.Text>
          <div className="card-button-flex">
            <div className="button-around">
              <Button onClick={handleEdit} variant="primary">
                Edit Recipie
              </Button>
            </div>
            <div className="button-around">
              <Button onClick={handleDelete} variant="danger">
                Delete
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
