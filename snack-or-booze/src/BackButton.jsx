import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const BackButton = () => {
  const location = useLocation();
  const history = useHistory();

  const handleGoBack = () => {
    if (location.pathname !== "/") {
      history.goBack();
    }
  };

  return (
    <Button
      color="secondary"
      onClick={handleGoBack}
      disabled={location.pathname === "/"}
      outline={location.pathname === "/"}
    >
      Go Back
    </Button>
  );
};

export default BackButton;
