import Navbar from "./navbar";

export function toggleMenu() {
    const menu = document.getElementById("navigation")
    if (menu.style.display === "block") {

        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
}

export default function Header() {
    return (
        <header>
            <Navbar />
            <div className="header">
                <div className="logo">
                    <img onClick={toggleMenu} src="./images/icon-menu.svg" alt="menu" />
                    <img src="./images/logo.svg" alt="sneakers-logo" />
                </div>
                <div className="logo">
                    <img src="./images/icon-cart.svg" alt="cart" />
                    <img id="avatar" src="./images/image-avatar.png" alt="avatar" />
                </div>
            </div>
        </header>
    )
}
