import React, { useState } from "react";
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
  Form,
} from "react-bootstrap";
import logo from "../../assets/nalystlogo.png";
import { IoIosAdd } from "react-icons/io";
import { BsFillBellFill } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import Sidebar from "../sidebar/Sidebar";
import { FaHamburger } from "react-icons/fa";
import "./header.css";

const Header = ({ showSidebar, toggleSidebar, handleShow }) => {
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center main-div py-2 h-100"
      >
        <div className="border main-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="d-flex gap-4 align-items-center flex-grow-1">
          <div className="border border-1">
            <FaHamburger onClick={toggleSidebar} size={30} />
          </div>
          <div className="d-flex div-nav">
            <Nav.Link href="#action1">News Feed</Nav.Link>
            <Nav.Link href="#action2">Opinion</Nav.Link>
            <Nav.Link href="#action2">Analysis</Nav.Link>
            <Nav.Link href="#action2">Statistics</Nav.Link>
          </div>
        </div>

        <div className="me-3 d-flex align-items-center gap-5">
          <div className="div-user">
            <div className="d-flex align-items-center div-lang mt-1">
              <TfiWorld style={{ marginBottom: "7px" }} size={25} />
              <h5>English</h5>
            </div>
            <span>
              <BsFillBellFill size={25} />
            </span>
          </div>
          <div>
            <img
              src={logo}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "2px solid gray",
              }}
            />
          </div>
        </div>
      </Container>
      {/* <Navbar className="mb-3"> */}
      {/* <Container fluid>
          <Navbar.Brand href="#" className="">
            <img
              src={logo}
              alt="logo"
              style={{ width: "160px" }}
              className="main-logo"
            />
          </Navbar.Brand>
          <div>
            <FaHamburger onClick={handleShow} />
          </div>
          <div className="d-flex gap-5">
            <Nav.Link href="#action1">News Feed</Nav.Link>
            <Nav.Link href="#action2">Opinion</Nav.Link>
            <Nav.Link href="#action2">Analysis</Nav.Link>
            <Nav.Link href="#action2">Statistics</Nav.Link>
          </div> */}
      {/* <Navbar.Toggle
            onClick={toggleSidebar}
            aria-controls={`offcanvasNavbar-expand-sm`}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start fs-6 fw-normal gap-3 flex-grow-1 mt-3 pe-3">
                <Nav.Link href="#action1">News Feed</Nav.Link>
                <Nav.Link href="#action2">Opinion</Nav.Link>
                <Nav.Link href="#action2">Analysis</Nav.Link>
                <Nav.Link href="#action2">Statistics</Nav.Link> */}
      {/* {showSidebar && <Sidebar />} */}

      {/* <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
      {/* </Nav> */}
      {/* <div className="me-3 d-flex align-items-center gap-5">
            <div className="d-flex justify-content-between gap-5">
              <div className="d-flex align-items-center gap-3 mt-1">
                <TfiWorld style={{ marginBottom: "7px" }} size={25} />
                <h5>English</h5>
              </div>
              <span>
                <BsFillBellFill size={25} />
              </span>
            </div>
            <div>
              <img
                src={logo}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "2px solid gray",
                }}
              />
            </div>
          </div> */}
      {/* </Offcanvas.Body>
          </Navbar.Offcanvas> */}
      {/* </Container> */}
      {/* </Navbar> */}
    </>
  );
};

export default Header;
