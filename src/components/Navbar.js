import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

const Navbar = () => {
const value = useContext(UserContext)
console.log(value)
return(
  <Menu>
    <NavLink to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to="/user/profile">
      <Menu.Item>
       {value.userData.firstName} {value.userData.lastName}
      </Menu.Item>
    </NavLink>
  </Menu> 
)}

export default Navbar