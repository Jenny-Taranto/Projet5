import React, { useState } from "react";

function Collapse({ title, text }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="collapse-header">
                <span>{title}</span><img src="/Vector.svg" alt="icône flèche" className={`icon ${isOpen ? "rotated" : ""}`} onClick={handleClick} />
            </div>
            <p className={`collapse-content ${isOpen ? "open" : ""}`}>{text}</p>
        </>
    )
}

export default Collapse