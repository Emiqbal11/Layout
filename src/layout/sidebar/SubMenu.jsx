import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const SidebarLink = styled(NavLink)`
  display: flex;
  color: var(--secondary-color);
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: #45c9f4;
    // color: #2f4f4f;
    border-left: 2px solid #000;
    cursor: pointer;
  }
  &.selected-link {
    // Add this CSS class for the selected link
    color: #45c9f4;
    background: #45c9f4;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(NavLink)`
  background: #ffffff;
  height: 50px;
  padding-left: 3.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--secondary-color);
  font-size: 18px;
  &:hover {
    color: #45c9f4;
    cursor: pointer;
  }
`;

const InputField = styled.input`
  width: 90%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubMenu = ({ item }) => {
  console.log(item);
  const [subnav, setSubnav] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubnav(!subnav);
    setShowInput(false);
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const toggleOpen = () => {
    if (item.title === "My Folder") {
      setIsOpen(!isOpen);
    }
  };

  const renderDateInputs = () => (
    <div className="d-flex flex-column gap-2" style={{ paddingLeft: "3.2rem" }}>
      <div>
        <Form.Label className="mb-0">From</Form.Label>
        <InputField type="date" placeholder="Enter something" />
      </div>
      <div className="d-flex flex-column">
        <Form.Label className="mb-0">To</Form.Label>
        <InputField type="date" placeholder="Enter something" />
        <Button className="w-50 mx-auto mt-3" variant="secondary">
          Go
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {item.path ? (
        <SidebarLink
          to={item.path}
          onClick={item.subNav ? toggleSubMenu : toggleOpen}
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#45c9f4" : "",
            };
          }}
        >
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {item.title === "My Folder" &&
              (isOpen ? <RiArrowUpSFill /> : <RiArrowDownSFill />)}
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
      ) : (
        <SidebarLink onClick={item.subNav ? toggleSubMenu : toggleOpen}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {item.title === "My Folder" &&
              (isOpen ? <RiArrowUpSFill /> : <RiArrowDownSFill />)}
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
      )}
      {/* <SidebarLink
        to={item.path}
        onClick={item.subNav ? toggleSubMenu : toggleOpen}
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "#45c9f4" : "",
          };
        }}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.title === "My Folder" &&
            (isOpen ? <RiArrowUpSFill /> : <RiArrowDownSFill />)}
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink> */}

      {subnav &&
        item.subNav.map((subItem, index) => (
          <DropdownLink
            to={subItem.path}
            key={index}
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "#45c9f4" : "",
              };
            }}
          >
            {subItem.icon}
            {subItem.title === "Specific Date" ? (
              <div
                onClick={toggleInput}
                className="d-flex justify-content-between w-100 p-3"
              >
                <div style={{ marginRight: "px" }}>Specific Date</div>
                <div className="me-1">
                  {showInput ? subItem.iconOpened : subItem.iconClosed}
                </div>
              </div>
            ) : (
              <SidebarLabel>{subItem.title}</SidebarLabel>
            )}
          </DropdownLink>
        ))}

      {isOpen && renderDateInputs()}
      {showInput && renderDateInputs()}
    </>
  );
};

export default SubMenu;
