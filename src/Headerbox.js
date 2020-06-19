import React from "react";
const Headerbox = (props) => {
  return (
    <div className="headerbox">
      <div className="headt">
        {props.indata.map((el) => (
          <div className={el.texth2 ==='For patients'?'he5':'he6'}>
            <h2 className='f2'>{el.texth2}</h2>
            <h1 className='f1'>{el.texth1}</h1>
            <img className='img7' src={el.img} />
            {el.country && (
              <select>
                {el.country.map((element) => (
                  <option value="#">{element.toUpperCase()}</option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>

      <div className=""></div>
    </div>
  );
};

export default Headerbox;
