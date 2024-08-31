import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useSelector} from "react-redux";

const Header = () => {
  const[btnName,setBtnName]=useState("Login")

  const cartItems=useSelector((store)=>store.cart.items)


  const onlieStatus = useOnlineStatus();
    return (
      <div className='header'>
  
        <div className='logo-container'>
          <img className='logo' src={LOGO_URL}/>
        </div>
  
        <div className='nav-items'>
         <ul>
          <li>Onliestatus:{onlieStatus?"✅":"🔴"}</li>
          <li className='nav-link'> <Link to="/">Home</Link></li>
          <li className='nav-link'> <Link to="/about">About</Link></li>
          <li className='nav-link'> <Link to="/contact">Contact Us</Link></li>
          <li className='nav-link'> <Link to= "/cart">Cart- ({cartItems.length} items)</Link></li>
          {/* <button className="btn" onClick={()=>{
            btnName === "Login" ? setBtnName {"LogOut"} : setBtnName{"LogIn"}
          }}>{btnName}</button> */}

            <button className="btn" onClick={() => {
                 btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login");
              }}>
                {btnName}
              </button>
         </ul>
  
        </div>
  
  
      </div>
    )
  } 

  export default Header;