import React, { useState } from "react";
import "../../style/css/sidebar.css";
import {
  LineStyle,
  Timeline,
  Class,
  Apartment,
  Email,
  ReportGmailerrorred,
  ThumbUpAlt,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </NavLink>
            <NavLink to="/analytics">
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Access</h3>
          <ul className="sidebarList">
            <NavLink to="/company">
              <li className="sidebarListItem">
                <Apartment className="sidebarIcon" />
                agencies
              </li>
            </NavLink>
            <NavLink to="/category">
              <li className="sidebarListItem">
                <Class className="sidebarIcon" />
                service
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <NavLink to="/mail">
              <li className="sidebarListItem">
                <Email className="sidebarIcon" />
                Mail
              </li>
            </NavLink>
            <NavLink to="/feedback">
              <li className="sidebarListItem">
                <ThumbUpAlt className="sidebarIcon" />
                Feedback
              </li>
            </NavLink>
            <NavLink to="/report">
              <li className="sidebarListItem">
                <ReportGmailerrorred className="sidebarIcon" />
                Report
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
