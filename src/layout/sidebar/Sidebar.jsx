import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import logo from "../../assets/nalystlogo.png";
import { RiCloseFill } from "react-icons/ri";
import { Offcanvas } from "react-bootstrap";

const Nav = styled.div`
  background: #ffffff;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

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

const Sidebar = ({ setShowSidebar, showSidebar, toggleSidebar }) => {
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
        <Offcanvas.Body className="bg-none">
          <SidebarWrap>
            <div className="border main-logo">
              <img src={logo} alt="logo" />
            </div>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
