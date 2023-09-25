import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaCalendar, FaEdit, FaEye, FaFolder, FaSave } from "react-icons/fa";
import { IoOpen } from "react-icons/io5";
import "./newscard.css";

const NewsCard = ({ Children }) => {
  return (
    <div className="shadow-md px-3 py-2 rounded border">
      <div className="d-flex justify-content-between">
        <p className="d-flex gap-2 align-items-center">
          <span>
            <FaCalendar size={20} style={{ color: "#45C9F4" }} />
          </span>
          <span className="fs-6">a year ago</span>
        </p>
        <p className="d-flex gap-2 align-items-center">
          <span className="fs-6">(Sports)</span>
          <span>
            <BsFillBookmarkFill size={25} style={{ color: "#45C9F4" }} />
          </span>
        </p>
      </div>
      <h4 className="for-h4 py-1">
        European Gasoline Barge Refining Margins Stable
      </h4>
      <p className="py-1 text-secondary">
        EUROPE: Benchmark northwest European gasoline barge refining margins
        were broadly stable on Thursday around $16 a barrel as stockpiles in
        north western Europe rose and transatlantic exports were slowi
      </p>
      <div>{Children}</div>
      <div className="d-flex justify-content-between child-div">
        <div className="d-flex align-items-center gap-3">
          <p className="d-flex gap-2 align-items-center">
            <span>
              <FaSave size={20} style={{ color: "#45C9F4" }} className="mb-1" />
            </span>
            <span className="fs-6 d-none d-md-flex">Saved</span>
          </p>
          <p className="d-flex gap-2 align-items-center">
            <span>
              <FaFolder
                size={20}
                style={{ color: "#45C9F4" }}
                className="mb-1"
              />
            </span>
            <span className="fs-6 d-none d-md-flex">Sport</span>
          </p>
        </div>
        <div className="d-flex align-items-center gap-3">
          <p className="d-flex gap-2 align-items-center">
            <span>
              <FaEye
                size={20}
                style={{ color: "#45C9F4", marginBottom: "2px" }}
              />
            </span>
            <span className="fs-6 d-none d-md-flex">View Note</span>
          </p>
          <p className="d-flex gap-2 align-items-center">
            <span>
              <FaEdit size={20} style={{ color: "#45C9F4" }} className="mb-1" />
            </span>
            <span className="fs-6 d-none d-md-flex">Edit Note</span>
          </p>
          <p className="d-flex gap-1 align-items-center">
            <span>
              <IoOpen size={20} style={{ color: "#45C9F4" }} className="mb-1" />
            </span>
            <span className="fs-6 d-none d-md-flex">Open</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
