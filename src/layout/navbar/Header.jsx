import React from "react";
import { Container, Nav, Offcanvas } from "react-bootstrap";
import logo from "../../assets/nalystlogo.png";
import { TfiWorld } from "react-icons/tfi";
import { BsFillBellFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import "./header.css";

const Header = ({ showSidebar, toggleSidebar, handleShow }) => {
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center main-div-header py-2 h-100"
      >
        <div className="d-flex d-md-none ms-1">
          <TiThMenu onClick={toggleSidebar} size={30} />
        </div>
        <div className="d-none d-md-flex align-items-center flex-grow-1 main-div-nav">
          <div className="d-none d-md-flex">
            <TiThMenu onClick={toggleSidebar} size={30} />
          </div>
          <div className="d-none d-md-flex div-nav">
            <Nav.Link href="#action1">News Feed</Nav.Link>
            <Nav.Link href="#action2">Opinion</Nav.Link>
            <Nav.Link href="#action2">Analysis</Nav.Link>
            <Nav.Link href="#action2">Statistics</Nav.Link>
          </div>
        </div>

        <div className="me-2 d-flex align-items-center main-div-user">
          <div className="main-div-lang">
            <div className="d-flex align-items-center div-lang mt-1">
              <TfiWorld style={{ marginBottom: "7px" }} />
              <h5>English</h5>
            </div>
            <div>
              <BsFillBellFill style={{ marginTop: "6px" }} />
            </div>
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
              alt="User Logo"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
