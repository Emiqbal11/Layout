import React, { useState } from "react";
import Sidebar from "../layout/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../layout/navbar/Header";
import "./dashboard.css";
import { Offcanvas } from "react-bootstrap";
const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShowSidebar(!showSidebar);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    setShow(true);
  };
  return (
    <>
      <div className="fixed-top-header">
        <Header
          toggleSidebar={toggleSidebar}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          handleShow={handleShow}
        />
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="sm"
        style={{ width: "58%" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div
            className={showSidebar ? "fixed-sidebar active" : "fixed-sidebar"}
          >
            <Sidebar />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className={showSidebar ? "content " : "content active"}>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
