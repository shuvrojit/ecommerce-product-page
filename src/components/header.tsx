import Navbar from "./navbar";

export function toggleMenu() {
    const menu = document.getElementById("navigation")
    if (menu.style.visibility === "visible") {
        menu.style.visibility = "hidden"
    } else {
        menu.style.visibility = "visible"
    }
}

export default function Header() {
    return (
        <header>
            <div className="header">
                <div className="logo">
                    <img id="menu-icon" onClick={toggleMenu} src="./images/icon-menu.svg" alt="menu" />
                    <img id="sneakers-logo" src="./images/logo.svg" alt="sneakers" />
                </div>
            <Navbar />
                <div className="logo">
                    <img src="./images/icon-cart.svg" alt="cart" />
                    <img id="avatar" src="./images/image-avatar.png" alt="avatar" />
                </div>
            </div>
        </header>
    )
}
