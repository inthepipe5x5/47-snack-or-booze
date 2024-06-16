/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <p>
            Currently, we have {snacks.length} snacks and {drinks.length} drinks
            on our menu!
          </p>
          <Link to="/snacks">
            <Button outline color="secondary">
              Snack Menu
            </Button>
          </Link>
          <Link to="/drinks">
            <Button outline color="secondary">
              Drink Menu
            </Button>
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
