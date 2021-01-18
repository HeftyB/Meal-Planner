import React from "react";
import { connect } from "react-redux";
import useForm from "../hooks/useForm";
import { getIngredients } from "../store/actions";
import { Input, Form, Label, Button, FormGroup, Col } from "reactstrap";
import RecipeIngredients from "./RecipeIngredients";

const initialForm = {
  recipieid: 0,
  recipename: "Beef Stew",
  description: "A delicious old time stew",
  directions: [
    {
      direction: {
        directionid: 1,
        direction:
          "Combine the flour and pepper in a bowl, add the beef and toss to coat well.",
      },
      stepnum: 1,
    },
  ],
  ingredients: [
    {
      ingredient: {
        ingredientid: 2,
        name: "Red Wine Vinegar",
        description: null,
        category: {
          categoryid: 15,
          name: "Pantry",
        },
      },
      qty: "2 tbsp",
    },
  ],
};

export const AddRecipe = ({ ingredients, getIngredients }) => {

  const [addRecipeForm, setAddRecipeForm, setFormValues] = useForm("Add Recipe", initialForm);

  // const

  return (
    <div className="container">
      <Form onSubmit={"submit"}>
        <FormGroup row>
          <Label for="recipename">Recipe Title:{"  "}</Label>
          <Col>
            <Input
              type="text"
              name="recipename"
              id="recipename"
              value={addRecipeForm.recipename}
              onChange={setAddRecipeForm}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="recipename">Recipe Title:{"  "}</Label>
          <Col sm={12}>
            <Input
              type="text"
              name="recipename"
              id="recipename"
              value={addRecipeForm.recipename}
              onChange={setAddRecipeForm}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description">
            Description:{"  "}
            <sup>max 250</sup>
          </Label>
          <Col>
            <Input
              type="textarea"
              maxlength="250"
              name="description"
              id="description"
              value={addRecipeForm.description}
              onChange={setAddRecipeForm}
            />
          </Col>
        </FormGroup>




      {
        /*
        LIST OF INGREDIENTS
        AND DIRECTIONS
        */

      }

      <hr />
      <RecipeIngredients addRecipeForm={addRecipeForm} setFormValues={setFormValues}/>












        {/* <br />
        <Label>
          IMG URL: {"  "}
          <Input
            type="text"
            name="img"
            value={addHowForm.img}
            onChange={setAddHowForm}
          />
        </Label> */}
        <br />
        <Label>
          Ingredients: {"  "}
          <Input
            type="select"
            name="ingredients"
            // value={recipeForm.postCat}
            // onChange={setAddHowForm}
          >
            {ingredients ? (
              ingredients.map((ingredient) => {
                // console.log(ingredient);
                return <option>{ingredient.name}</option>;
              })
            ) : (
              <option>"Ingredients are loading"</option>
            )}
            ;
            {/* <option value="Technology">Technology</option>
            <option value="Health">Health</option>
            <option value="Automotive">Automotive</option>
            <option value="Everyday">Everyday</option> */}
          </Input>
        </Label>
        <br />
        <Button color="success">Submit</Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
});

const mapDispatchToProps = {
  getIngredients,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
