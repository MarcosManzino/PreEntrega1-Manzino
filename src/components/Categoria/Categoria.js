import { useState } from "react";
import { Link } from "react-router-dom";

export default function Categoria({ nombre, imgSrc }) {

    const [isHovering, setisHovering] = useState(false);

    function handleMouseEnter(e) {
        setisHovering(true)


    }

    function handleMouseLeave(e) {
        setisHovering(false)


    }

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id="ropa-1"><Link to={`producto/${nombre}`}><img src={imgSrc} alt="Logo" /></Link>
            <p id="ocultar-1" className={`ropa-oculto ${isHovering ? "ocultar" : ""} `}>{nombre}</p>
        </li>
    )


}