import React from "react";
const Firstheader = (props) => {
  return (
    <div className="firstheader">
      <img
        className="logofirstheader"
        src="https://www.docplanner.com/img/sygnet.png"
      />

      <div>
        <div>
          <p className="fh1">{props.info[0].textb}</p>
        </div>
        <div className="textfirstheader">
          {props.info.map((el) => (
            el.text && <p className="fh2">{el.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Firstheader;
