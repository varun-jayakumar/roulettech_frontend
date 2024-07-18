import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { postData, updateData } from "./../fetch/api.js";

function AddRecipe({
  recipes,
  setRecipes,
  isEdit,
  currentEditRecipe,
  setIsEdit,
}) {
  const [recipe, setRecipe] = useState({});
  const [isCreateDisabled, setIsCreateDisabled] = useState(
    !recipe.title ||
      !recipe.cuisine ||
      !recipe.ingredients ||
      !recipe.instructions
  );

  useEffect(() => {
    if (isEdit) {
      setRecipe(currentEditRecipe);
    }
  }, [currentEditRecipe, isEdit]);

  async function handleUpdateRecipie(e) {
    e.preventDefault();
    setIsCreateDisabled(true);
    const data = await updateData(recipe, recipe.id);
    const newRecipes = recipes.map((recipe) =>
      recipe.id === data.id ? data : recipe
    );
    setRecipes(newRecipes);
    setRecipe({});
    setIsEdit(false);
    setIsCreateDisabled(false);
  }

  async function handleAddRecipie(e) {
    e.preventDefault();
    setIsCreateDisabled(true);
    const data = await postData(recipe);
    setRecipe({});
    setRecipes([...recipes, data]);
    setIsCreateDisabled(false);
  }

  function handleOnChangeTitle(e) {
    setRecipe({ ...recipe, title: e.target.value });
    console.log(e.target.value);
    setIsCreateDisabled(
      !e.target.value ||
        !recipe.cuisine ||
        !recipe.ingredients ||
        !recipe.instructions
    );
  }

  function handleOnChangeCuisine(e) {
    setRecipe({ ...recipe, cuisine: e.target.value });
    console.log(e.target.value);
    setIsCreateDisabled(
      !recipe.title ||
        !e.target.value ||
        !recipe.ingredients ||
        !recipe.instructions
    );
  }

  function handleOnChangeIngredients(e) {
    setRecipe({ ...recipe, ingredients: e.target.value });
    console.log(e.target.value);
    setIsCreateDisabled(
      !recipe.title ||
        !recipe.cuisine ||
        !e.target.value ||
        !recipe.instructions
    );
  }

  function handleOnChangeInstructions(e) {
    setRecipe({ ...recipe, instructions: e.target.value });
    console.log(e.target.value);
    setIsCreateDisabled(
      !recipe.title || !recipe.cuisine || !recipe.ingredients || !e.target.value
    );
  }

  return (
    <Form
      style={{
        backgroundColor: "#f2f2f2",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        margin: "20px",
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Title *</Form.Label>
        <Form.Control
          value={recipe.title || ""}
          onChange={handleOnChangeTitle}
          placeholder="Title of the Recipe"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cuisine *</Form.Label>
        <Form.Control
          value={recipe.cuisine || ""}
          onChange={handleOnChangeCuisine}
          placeholder="Cuisine"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Ingredients *</Form.Label>
        <Form.Control
          value={recipe.ingredients || ""}
          as="textarea"
          placeholder="List of ingredients"
          style={{ height: "100px" }}
          onChange={handleOnChangeIngredients}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Instructions *</Form.Label>
        <Form.Control
          value={recipe.instructions || ""}
          as="textarea"
          placeholder=""
          style={{ height: "100px" }}
          onChange={handleOnChangeInstructions}
        />
      </Form.Group>
      {!isEdit && (
        <Button
          disabled={isCreateDisabled}
          variant="success"
          onClick={handleAddRecipie}
        >
          Create Recipe
        </Button>
      )}
      {isEdit && (
        <>
          <Button
            disabled={isCreateDisabled}
            variant="success"
            onClick={handleUpdateRecipie}
          >
            Update Recipe
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            variant="danger"
            onClick={() => {
              setIsEdit(false);
              setRecipe({});
            }}
          >
            Cancel Edit
          </Button>
        </>
      )}
    </Form>
  );
}

export default AddRecipe;
