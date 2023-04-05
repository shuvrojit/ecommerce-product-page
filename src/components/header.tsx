import {useState} from 'react';
import Cart from './cart';
import Navbar from "./navbar";
import menuIcon from "/images/icon-menu.svg"
import cartIcon from "/images/icon-cart.svg"
import avatarIcon from "/images/image-avatar.png"
import logo from "/images/logo.svg"

export function toggleMenu() {
  const menu = document.getElementById("navigation")
  if (menu.style.visibility === "visible") {
    menu.style.visibility = "hidden"
  } else {
    menu.style.visibility = "visible"
  }
}

export default function Header() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(current => !current);
    console.log("hello")
  };

  return (
    <header>
      <div className="header">
        <div className="logo">
      <img id="menu-icon" onClick={toggleMenu} src={menuIcon} alt="menu" />
      <img id="sneakers-logo" src={logo} alt="sneakers" />
        </div>
        <Navbar />
        <div className="logo">
      {isShown && <Cart />}
      <img onClick={handleClick} src={cartIcon} alt="cart" />
      <img id="avatar" src={avatarIcon} alt="avatar" />
        </div>
      </div>
      <hr />
    </header>
  )
}
