import { useState } from "react";
import { Link } from "react-router-dom";




export default function Item({ producto }) {
    const [isHovering, setisHovering] = useState(false);

    function handleMouseEnter() {
        setisHovering(true)


    }

    function handleMouseLeave() {
        setisHovering(false)


    }




    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="items" key={producto.id}>
            <img alt="/" src={process.env.PUBLIC_URL + producto.img[isHovering ? 1 : 0]} />
            <p>${producto.precio.toLocaleString('es-ES')}</p>
            <div className="center">
                <button>añadir al carrito</button>
                <button> <Link to={`/${producto.id}`}>Ver mas</Link> </button>
            </div>
        </li>
    )
}
