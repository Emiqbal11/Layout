import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";

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

const Sidebar = () => {
  return (
    <>
      <SidebarWrap className="my-list">
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </SidebarWrap>
    </>
  );
};

export default Sidebar;
