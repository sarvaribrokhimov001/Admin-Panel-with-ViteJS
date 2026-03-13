import React from 'react';
import "../styles/Sidebar.css";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar__container'>
        <h1>sidebar</h1>
        <ul>
            <li> <NavLink to="/products"> Products </NavLink> </li>
            <li> <NavLink to="/users"> Users </NavLink> </li>
            <li> <NavLink to="/cars"> Cars </NavLink> </li>
        </ul>
    </div>
  )
}

export default Sidebar