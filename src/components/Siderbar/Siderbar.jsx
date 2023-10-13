import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Siderbar.scss";
export default function Siderbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/admin/user",
      name: "User",
      icon: <i className="fa-regular fa-user" />,
    },
    {
      path: "/admin/phongthue",
      name: " Rent Room",
      icon: <i className="fa-solid fa-house" />,
    },
  ];
  const renderSiderbar = () => {
    return menuItem.map((element, idx) => {
      return (
        <NavLink key={idx} to={element.path} className="link">
          <div className="icon-siderbar">{element.icon}</div>
          <div
            style={{ display: isOpen ? "block" : "none" }}
            className="link_text"
          >
            {element.name}
          </div>
        </NavLink>
      );
    });
  };
  return (
    <div style={{ width: isOpen ? "200px" : "70px" }} className="siderbar">
      <div className="top-siderbar">
        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          Admin Page
        </h1>
        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
          <button onClick={toggle}>
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </div>
      {renderSiderbar()}
    </div>
  );
}