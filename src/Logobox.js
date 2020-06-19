import React from "react";
const Logobox = (props) => {
  return (
    <div className="logooo">
      <h1 className="we_are"> {props.work} </h1>
      {props.inlogo.map((el) => (
       <a  href={el.href} target="_blank">
          <svg className='logoo' 
            xmlns="http://www.w3.org/2000/svg"
            width={el.width}
            height="32"
            viewBox={el.viewBox}
          >
            <path d={el.d}></path>
          </svg>
        </a>
        
      ))}
      
    </div>
  );
};

export default Logobox;
