import { toggleMenu } from "./header";

export default function Navbar() {
    return (
        <nav id="navigation" className="nav-links">
            <img id="toggle-menu" onClick={toggleMenu} src="./images/icon-close.svg" alt="close" />
            <ul>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
