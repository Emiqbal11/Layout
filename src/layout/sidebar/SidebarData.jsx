import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome style={{ marginBottom: "5px" }} />,
  },

  {
    title: "Time",
    // path: "/time",
    icon: <FaIcons.FaCalendarAlt style={{ marginBottom: "5px" }} />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Today",
        path: "/time/today",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Tomorrow",
        path: "/time/tomorrow",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Past Week",
        path: "/time/past-week",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Specific Date",
        path: "/time/past-week",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
      },
    ],
  },
  {
    title: "My Folder",
    path: "/",
    icon: <AiIcons.AiFillHome style={{ marginBottom: "5px" }} />,
  },
];
