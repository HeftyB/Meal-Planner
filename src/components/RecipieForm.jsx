import React, { useState, useEffect } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const recipeTemp = {
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

const ingredentTemp = {
    ingredient: {
      ingredientid: 2,
      name: "Red Wine Vinegar",
      description: null,
      category: {
        categoryid: 15,
        name: "Pantry",
      },
    }
}

export default function RecipieForm() {
  const [recipeForm, setRecipeForm] = useState(recipeTemp);
  const [ingredientForm, setIngredientForm] = useState(ingredentTemp);

  return (
    <div className="container">
      <Form>
        <FormGroup row>
          <Label for="name" sm={2}>
            Recipe Name:
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder={recipeForm.recipename}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="description" sm={2}>
            Drscription
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="description"
              id="description"
              placeholder={recipeForm.description}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="url" sm={2}>
            URL
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="description"
              id="description"
              placeholder="URL NEED TO GET WORKING"
            />
          </Col>
        </FormGroup>
      </Form>

      <div>
        <div>
          Ingredients
          {recipeForm.ingredients.map((ingredient) => {
            return (
              <div>
                <span>Name: {ingredient.ingredient.name}</span>
                <span>QTY: {ingredient.qty}</span>
              </div>
            );
          })}
          <div>
            <div>
              <Form>

              <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Select
          </Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect">
                {/* mapped ingredients from axios call to state and mapp into options */}
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
        </FormGroup>


                <FormGroup row>
                  <Label for="name" sm={2}>
                    Recipe Name:
                  </Label>
                  <Col sm={10}>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder={"yes"}
                    />
                  </Col>
                </FormGroup>
                <Button className="primary">Submit</Button>
                <FormGroup row>
                  <Label for="exampleText" sm={2}>
                    Text Area
                  </Label>
                  <Col sm={10}>
                    <Input type="textarea" name="text" id="exampleText" />
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
          <div className="container">Directions</div>
        </div>
        {/* <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Select
          </Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelectMulti" sm={2}>
            Select Multiple
          </Label>
          <Col sm={10}>
            <Input
              type="select"
              name="selectMulti"
              id="exampleSelectMulti"
              multiple
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Text Area
          </Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            File
          </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup tag="fieldset" row>
          <legend className="col-form-label col-sm-2">Radio Buttons</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" /> Option one is this and
                that—be sure to include why it's great
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" /> Option two can be something
                else and selecting it will deselect option one
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio2" disabled /> Option three is
                disabled
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="checkbox2" sm={2}>
            Checkbox
          </Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" /> Check me out
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup> */}
      </div>
    </div>
  );
}
