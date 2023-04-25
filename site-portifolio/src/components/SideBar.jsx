import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { menuItems } from "../utils/constants";
import { Link } from "react-router-dom";

function SideBar({ selectedMenuItem, setSelectedMenuItem }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="profile-image-container">
        <img
          className="profile-image"
          src="https://avatars.githubusercontent.com/u/38771418?v=4"
          alt=""
        />
      </div>
      <div className="social-media">
        
      </div>
      <ul>
        {menuItems.map((menuItem) => (
          <button
            className="menu-item-btn"
            onClick={() => <Link to={menuItem.link} />}
            style={{
              background: menuItem.name === selectedMenuItem && "#FC1503",
            }}
            key={menuItem.name}
          >
            <span
              style={{
                color: menuItem.name === selectedMenuItem ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {menuItem.icon}
            </span>
            <span
              className="button-color-text"
              style={{
                opacity: menuItem.name === selectedMenuItem ? "1" : "0.8",
              }}
            >
              {menuItem.name}
            </span>
          </button>
        ))}
      </ul>

      <div className="sidebar-footer collapse-btn" onClick={toggleCollapsed}>
        {collapsed ? (
          <BsFillArrowLeftCircleFill />
        ) : (
          <BsFillArrowRightCircleFill />
        )}
      </div>
    </div>
  );
}
export default SideBar;
