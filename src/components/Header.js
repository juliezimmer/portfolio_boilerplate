import React from 'react';
// requires named export, NavLink in the file because it's used in the header.
import { NavLink } from 'react-router-dom';

// this header needs to be rendered on every single page, unlike the other components in routes.
const Header = () => (
   <header>
      <h1>Portfolio</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>
         Home
      </NavLink>
      <NavLink to="/portfolio" activeClassName="is-active" exact={true}>
         Portfolio
      </NavLink>
      <NavLink to="/contact" activeClassName="is-active">
         Contact
      </NavLink>
      
      
   </header>
);
// This set-up will allow <Header /> to show up on every page that's rendered. By putting it before  <Switch />, it will be rendered every time on the page that has the matching path. 

export default Header;