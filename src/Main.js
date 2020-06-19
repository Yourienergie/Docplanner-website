import React from "react";
const Main = (props) => {
  return (
    <div className="main">
      <div className="pmain">
        <h1>The world'sbiggest healthcare platform</h1>
        <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
        <img src ="https://www.docplanner.com/img/sygnet.png" />
      </div>
      <div className="logomain">
      {props.main1.map((el) => (
        <div className="work1" >
          <img scr={el.img} srcset={el.srcset}></img>
          <h3>{el.h3}</h3>
          <p>{el.p}</p>
        </div>
      ))}
      </div>
    </div>
  );
};
export default Main;
