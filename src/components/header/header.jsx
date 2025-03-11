import React from "react"
import Nav from "../nav/Nav.jsx"

function Header() {
    return (
        <header>
                <img className="logo" src="/logo.svg" alt="logo de l'entreprise Kasa" />
            <Nav />
        </header>
    )
}

export default Header