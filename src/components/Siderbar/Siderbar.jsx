import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Siderbar.scss";
export default function Siderbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItemSiderbar = [
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
    {
      path: "/admin/location",
      name: "Location",
      icon: <i className="fa-regular fa-map" />,
    },
    {
      path: "/admin/comment",
      name: "Comment",
      icon: <i className="fa-regular fa-comment" />,
    },
  ];

  const renderSiderbar = () => {
    return menuItemSiderbar.map((element, idx) => {
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
    <div style={{ width: isOpen ? "250px" : "70px" }} className="siderbar">
      <div className="top-siderbar">
        <NavLink
          to={`/admin/`}
          style={{ display: isOpen ? "block" : "none" }}
          className="logo"
        >
          MANAGER
        </NavLink>
        <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
          <button onClick={toggle}>
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </div>
      {renderSiderbar()}
      <hr />
      <div>
        <button className="btn-logout">
          <div className="icon-siderbar">
            <i className="fa-solid fa-arrow-right-from-bracket" />
          </div>
          <span style={{ display: isOpen ? "block" : "none" }} className="">
            logout
          </span>
        </button>
      </div>
    </div>
  );
}
