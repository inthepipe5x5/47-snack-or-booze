/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import "./NavBar.css";

const NavBar = ({ direction = "down", ...args }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="d-flex p-5">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>Snack or Booze</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem header>Menu</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/">Home</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/snacks">Snacks Menu</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/drinks">Drinks Menu</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavBar;
