import logo from "../../assets/logo.svg";
import Nav from "../nav/nav.jsx"

function Header() {
    return (
        <header>
                <img className="logo" src={logo} alt="logo de l'entreprise Kasa" />
            <Nav />
        </header>
    )
}

export default Header