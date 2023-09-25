import React, { useEffect, useRef, useState } from "react";
import { Container, Nav, Offcanvas } from "react-bootstrap";
import logo from "../../assets/nalystlogo.png";
import { TfiWorld } from "react-icons/tfi";
import { BsFillBellFill } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import "./header.css";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Header = ({ showSidebar, toggleSidebar, handleShow }) => {
  const [dropdownOpen, setDropdownOpen] = useState(true);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
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

        <div
          className="me-2 d-flex align-items-center main-div-user"
          ref={dropdownRef}
        >
          <div className="main-div-lang">
            <div className="d-flex align-items-center div-lang mt-1">
              <TfiWorld style={{ marginBottom: "7px" }} />
              <h5>English</h5>
            </div>
            <div>
              <BsFillBellFill style={{ marginTop: "6px" }} />
            </div>
          </div>
          <div
            onClick={toggleDropdown}
            className="d-flex align-items-center gap-2 border px-2 py-1"
          >
            <div className="d-flex flex-column">
              <span className="">userNAME</span>
              <span className="">USER Member</span>
            </div>
            <div className="d-flex align-items-center gap-2">
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

              {dropdownOpen ? (
                <IoMdArrowDropup size={25} onClick={toggleDropdown} />
              ) : (
                <IoMdArrowDropdown size={25} />
              )}
            </div>
          </div>
        </div>
      </Container>
      {dropdownOpen && (
        <div className="drop-menu">
          <p className="d-flex justify-content-between">
            <span>User</span>
            <span>Nalyst User</span>
          </p>
          <button
            className="drop-menu-button"
            // onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Log Out</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
