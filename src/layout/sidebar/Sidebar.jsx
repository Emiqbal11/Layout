import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import logo from "../../assets/nalystlogo.png";
import { RiArrowDownSFill, RiArrowUpSFill, RiCloseFill } from "react-icons/ri";
import { Offcanvas, Nav } from "react-bootstrap";

// const Nav = styled.div`
//   background: #ffffff;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }

  /* Change the color of the scrollbar thumb (the draggable part) */
  &::-webkit-scrollbar-thumb {
    background-color: #45c9f4; /* Change to your desired color */
    border-radius: 10px; /* Rounded corners for the scrollbar thumb */
  }

  /* Change the color of the scrollbar track (the non-draggable part) */
  &::-webkit-scrollbar-track {
    background-color: white; /* Change to your desired color */
  }
`;
const SidebarLink = styled(Link)`
  display: flex;
  color: #000;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #45c9f4;
    border-left: 2px solid #000;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;
const Sidebar = ({ setShowSidebar, showSidebar, toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Offcanvas
        show={showSidebar}
        onHide={toggleSidebar}
        responsive="md"

        // style={{ width: "60%" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{/* <FaIcons.FaHubspot /> */}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-1">
          <SidebarWrap>
            <div className="border main-logo">
              <img src={logo} alt="logo" />
            </div>

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}

            <div className="d-flex flex-column d-md-none div-nav">
              <SidebarLink href="#action1" onClick={() => setIsOpen(!isOpen)}>
                <div>
                  <FaIcons.FaHome />
                  <SidebarLabel>Category</SidebarLabel>
                </div>
                <div>{isOpen ? <RiArrowUpSFill /> : <RiArrowDownSFill />}</div>
              </SidebarLink>
            </div>
            {isOpen && (
              <div className="d-flex justify-content-center flex-column gap-3 mx-5 py-2">
                <Nav.Link href="#action2">Opinion</Nav.Link>
                <Nav.Link href="#action2">Opinion</Nav.Link>
                <Nav.Link href="#action2">Analysis</Nav.Link>
                <Nav.Link href="#action2">Statistics</Nav.Link>
              </div>
            )}
          </SidebarWrap>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
