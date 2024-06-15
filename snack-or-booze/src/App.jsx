/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import BackButton from "./BackButton";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getFoodItems() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getFoodItems();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div class="col">
          <div class="row">
            <BackButton />{" "}
          </div>
          <div class="row">
            <NavBar />{" "}
          </div>
        </div>

        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route path="/snacks/:id">
              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/snacks">
              <FoodMenu foodType="snacks" foodItems={snacks} title="Snacks" />
            </Route>
            <Route path="/drinks/:id">
              <FoodItem items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/drinks">
              <FoodMenu foodType="drinks" foodItems={drinks} title="Drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
