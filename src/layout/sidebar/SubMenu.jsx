import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import {
  IoIosAdd,
  IoIosAddCircle,
  IoMdCafe,
  IoMdColorWand,
} from "react-icons/io";

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

const DropdownLink = styled(Link)`
  background: #ffffff;
  height: 50px;
  padding-left: 3.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 18px;

  &:hover {
    background: #45c9f4;
    cursor: pointer;
  }
`;
const InputField = styled.input`
  /* Define styles for your input field here */
  width: 90%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [showInput, setShowInput] = useState(false); // Step 1
  const [isOpen, setIsOpen] = useState(false); // Step 1

  console.log(item);

  const toggleSubMenu = () => {
    setSubnav(!subnav);
    setShowInput(false); // Close the input field when submenu is closed
  };

  const toggleInput = () => {
    setShowInput(!showInput); // Step 3
  };
  const toggleOpen = () => {
    if (item.title === "My Folder") {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav ? toggleSubMenu : null}>
        <div onClick={toggleOpen}>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.title === "My Folder" &&
            (isOpen ? <RiArrowDownSFill /> : <RiArrowUpSFill />)}
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              {item.title === "Specific Date" ? (
                <div
                  onClick={toggleInput}
                  className="d-flex justify-content-between w-100 p-3"
                >
                  <div style={{ marginRight: "px" }}>Specific Date</div>
                  <div className="me-1">
                    {showInput ? item.iconClosed : item.iconOpened}
                  </div>
                </div>
              ) : (
                <SidebarLabel>{item.title}</SidebarLabel>
              )}
            </DropdownLink>
          );
        })}
      {isOpen && (
        <div className="d-flex flex-column gap-2">
          <div className="" style={{ paddingLeft: "3.2rem" }}>
            <Form.Label className="mb-0">From</Form.Label>
            <InputField
              type="date"
              placeholder="Enter something"
              // You can handle input field logic here
            />
          </div>
          <div className="d-flex flex-column" style={{ paddingLeft: "3.2rem" }}>
            <Form.Label className="mb-0">To</Form.Label>
            <InputField
              type="date"
              placeholder="Enter something"
              // You can handle input field logic here
            />
            <Button className="w-50 mx-auto mt-3 " variant="secondary">
              Go
            </Button>
          </div>
        </div>
      )}
      {showInput && (
        <div className="d-flex flex-column gap-2">
          <div className="" style={{ paddingLeft: "3.2rem" }}>
            <Form.Label className="mb-0">From</Form.Label>
            <InputField
              type="date"
              placeholder="Enter something"
              // You can handle input field logic here
            />
          </div>
          <div className="d-flex flex-column" style={{ paddingLeft: "3.2rem" }}>
            <Form.Label className="mb-0">To</Form.Label>
            <InputField
              type="date"
              placeholder="Enter something"
              // You can handle input field logic here
            />
            <Button className="w-50 mx-auto mt-3 " variant="secondary">
              Go
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default SubMenu;
