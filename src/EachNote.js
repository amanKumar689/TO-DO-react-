import React, { useState, useEffect } from "react";

const Global = [
  "fas fa-running",
  "fas fa-clipboard-check",
  "fas fa-pause",
  "fas fa-hourglass-half",
];

const EachNote = (props) => {
  const [openId, setOpenId] = useState(props.id);
  const [componentId, setComponentId] = useState(props.id);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    const val = Global.filter((val) => val != props.status.join(" "));
    setStatus(() => val);
  }, [props.status]);
  return (
    <>
      <div className="eachNote" id={"parent" + props.id}>
        <div
          className={
            props.open?.status && openId == props.open?.id
              ? "statushandler open"
              : "statushandler"
          }
          id={"statushandler" + props.id}
        >
          <div className="wrapper">
            <i
              className={props.status.join(" ") + " status_selector"}
              onClick={(e) => {
                props.statusHandler(e, componentId);
              }}
              id={props.id}
            ></i>
          </div>
          <div className="wrapper">
            <i
              className={status[0]}
              onClick={(e) => {
                props.statusHandler(e, componentId);
              }}
            ></i>
          </div>
          <div className="wrapper">
            <i
              className={status[1]}
              onClick={(e) => {
                props.statusHandler(e, componentId);
              }}
            ></i>
          </div>
          <div className="wrapper">
            <i
              className={status[2]}
              onClick={(e) => {
                props.statusHandler(e, componentId);
              }}
            ></i>
          </div>
        </div>
        <div
          className="noteBox"
          onClick={(e) => {
            props.descriptionHandler(e, componentId);
          }}
        >
          <p> {props.val}</p>
        </div>
        <div className="note-controller">
          <button
            className="btn"
            onClick={(e) => {
              props.Edit(e, componentId);
            }}
          >
            <i className="far fa-edit"></i>
          </button>
          <button
            className="btn"
            onClick={(e) => {
              props.Delete(e, componentId);
            }}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default EachNote;
