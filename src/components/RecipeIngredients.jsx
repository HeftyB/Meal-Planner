// import { Button } from 'bootstrap';
import React, { useState } from "react";
import { connect } from "react-redux";
import { Input, Label, Table, Button } from "reactstrap";

const RecipeIngredients = ({ addRecipeForm, setFormValues, ingredients }) => {
  let [recipeIngredient, setRecipeIngredient] = useState({
    ingredient: {},
    qty: "",
  });

  let recIngredients = addRecipeForm.ingredients;
  let counter = 0;

  return (
    <div>
      <h4>Recipe Ingredients</h4>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>QTY</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {recipeIngredient ? recIngredients.map((ingredient) => {
            counter++;
            return (
              <tr>
                <th scope="row">{counter}</th>
                <td>{ingredient.ingredient.name}</td>
                <td>{ingredient.qty}</td>
                <td>{ingredient.ingredient.category.name}</td>
              </tr>
            );
          }) : <tr>
              <th scope="row">0</th>
              <td>....Loading</td>
              <td>....</td>
              <td>....</td>
          </tr>}
        </tbody>
      </Table>

      <Label>Add ingredient</Label>
      <Input
        type="select"
        name="ingredients"
        value={recipeIngredient.ingredient}
        onChange={setRecipeIngredient}
      >
        {ingredients ? (
          ingredients.map((ingredient) => {
            // console.log(ingredient);
            return <option value={ingredient}>{ingredient.name}</option>;
          })
        ) : (
          <option>"Ingredients are loading"</option>
        )}
      </Input>
      <Input
        type="text"
        name="qty"
        placeholder="1TBSP"
        value={recipeIngredient.qty}
        onChange={(e) => {
          setRecipeIngredient({
            ...recipeIngredient,
            qty: e.target.value,
          });
        }}
      ></Input>

      <Button onClick={() => {
          // setFormValues({
          //     ...addRecipeForm, ingredients: {...ingredients, recipeIngredient}
          // });
          // setRecipeIngredient({
          //     ingredient: {},
          //     qty: "",
          // });
      }}>Submit</Button> // TODO finish submit action -- redux???
      
    </div>
  );
};

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIngredients);
