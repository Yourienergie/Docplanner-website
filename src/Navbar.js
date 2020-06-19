import React from 'react';
const Navbar = (props) => {
    return (
        <div className='navbar'>

            <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" />

            <ul className='namenav'>
                {props.data.map(el => el.subMenu ?
                    <div class="dropdown">
                        <a class="dropbtn">{el.text}</a>
                        <div class="dropdown-content">
                            {
                                el.subMenu.map(el => <a href="#">{el}</a>)
                            }

                        </div>
                    </div>
                    : <a href='#'><li className='nav'>{el.text}</li></a>)}
            </ul>


        </div>
    );
};

export default Navbar;