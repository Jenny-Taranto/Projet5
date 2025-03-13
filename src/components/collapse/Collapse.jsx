import React from "react"

function Collapse({ title }) {
    return (
<div className="collapse">
    <span>{title}</span><img src="public/Vector.svg" alt="icône flèche" className="icon"/>
</div>
    )
}

export default Collapse