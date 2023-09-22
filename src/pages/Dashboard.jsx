import React, { useState } from "react";
import Sidebar from "../layout/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../layout/navbar/Header";
import "./dashboard.css";
import { Offcanvas } from "react-bootstrap";
import { FaHubspot } from "react-icons/fa";
const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div
        className={showSidebar ? "fixed-top-header" : "fixed-top-header active"}
      >
        <Header
          toggleSidebar={toggleSidebar}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      </div>

      <div className={showSidebar ? "fixed-sidebar active" : "fixed-sidebar"}>
        <Sidebar
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
        />
      </div>

      <div className={showSidebar ? "content " : "content active"}>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
