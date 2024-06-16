import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
} from "reactstrap";
import SnackOrBoozeApi from "./Api";

const NewFood = () => {
  const defaultInputData = {
    name: "",
    description: "",
    recipe: "",
    serve: "",
    drink: false,
    snack: false,
  };

  const [inputData, setInputData] = useState(defaultInputData);

  const handleInput = (evt) => {
    const { name, value, type, checked } = evt.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { name, description, recipe, serve, snack, drink } = inputData;

    if (snack) {
      await SnackOrBoozeApi.postSnack({
        name: name,
        description: description,
        recipe: recipe,
        serve: serve,
      });
    } else if (drink) {
      await SnackOrBoozeApi.postDrink({
        name: name,
        description: description,
        recipe: recipe,
        serve: serve,
      });
    }

    // Reset the form after submission
    setInputData(defaultInputData);
  };

  return (
    <Card>
      <CardTitle className="font-weight-bold text-center">
        Submit Your Own Snack or Booze Creation!
      </CardTitle>
      <CardBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label for="name" sm={2}>
              Food Name
            </Label>
            <Col sm={10}>
              <Input
                id="name"
                name="name"
                placeholder="New food name"
                type="text"
                value={inputData.name}
                onChange={handleInput}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="description" sm={2}>
              Description
            </Label>
            <Col sm={10}>
              <Input
                id="description"
                name="description"
                type="textarea"
                value={inputData.description}
                onChange={handleInput}
              />
            </Col>
          </FormGroup>

          <FormGroup row tag="fieldset">
            <legend className="col-form-label col-sm-2">Food Type</legend>
            <Col sm={10}>
              <FormGroup check>
                <Input
                  name="snack"
                  type="radio"
                  checked={inputData.snack}
                  onChange={handleInput}
                />
                <Label check>Snack</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="drink"
                  type="radio"
                  checked={inputData.drink}
                  onChange={handleInput}
                />
                <Label check>Drink</Label>
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ offset: 2, size: 10 }}>
              <Button type="submit">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
};

export default NewFood;
