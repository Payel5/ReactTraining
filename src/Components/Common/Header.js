import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () =>{
    const ActiveStyle={color:'#f00'};
    return(
        <>
            <NavLink exact to="/" activeStyle={ActiveStyle}>Home</NavLink>{" | "}
            <NavLink to="/courses" activeStyle={ActiveStyle}>Courses</NavLink>{" | "}
            <NavLink to="/about" activeStyle={ActiveStyle}>About</NavLink>
        </>
    );
}

export default Header;