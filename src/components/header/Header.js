import React from "react";
import logo from "../../images/logo.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee ,faCartPlus} from "@fortawesome/free-solid-svg-icons";
import { consumer } from "../MyContext";

const Header = (props) => {
  
  return (
    <div>
      <div className="header">
        <img src={logo} alt="" />
      </div>
      <nav>
      <consumer>
        {name=> {return name}}
      </consumer>
        <a href="Shop">Shop</a>
        <a href="Order">Order Review</a>
        <a href="Manage">Manage Inventory</a>
        <input type="text" placeholder="Enter Your Product Name" />
        <span style={{color:'white',fontSize:'28px',marginLeft:'115px',marginTop:'5px'}}><FontAwesomeIcon icon={faCartPlus} /></span>
        <span style={{color:'rgba(241, 196, 15,1.0)',fontWeight:'bold',fontSize:'28px',marginLeft:'10px'}}>0</span>
      </nav>
    </div>
  );
};

export default Header;
