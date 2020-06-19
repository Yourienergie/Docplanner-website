import React from 'react';
const A_footer = (props) => {
    return (
        <div className="footer">
        
            <h1 className="e_footer">Improve the lives of millions. Change yours forever</h1>
            <p className="p_footer">More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
           
            <div className="photofooter">
                {props.datamain.map(el => (<div className="office">
                    <a href={el.href} className="office__inner">
                        <figure className="office__image" />
                        <img scr={el.img} srcset={el.srcset} />

                        <div className="office__desc">
                           {el.country}
                  <span className="btnall">See openings</span>
                        </div>
                    </a>
                </div>)




                )}
            </div>

        </div>
    )
}
export default A_footer;