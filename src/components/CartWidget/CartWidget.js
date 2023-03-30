import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../../context/carrito";
import { useContext, useEffect, useState } from "react";


export default function CartWidget() {
    const { cart } = useContext(CartContext);
    const cartObj = Object.values(cart);
    const [cartNumber, setCartNumber] = useState(0)
    useEffect(() => { let cartNum = 0; for (let product of cartObj) { cartNum += product.cantidad; } setCartNumber(cartNum); }, [cart, cartObj]);
    // el calculo esta ya que no encontre otra forma de que me marque la cantidad total de productos y no solamente el item sin contar la cantidad de items que tengo de uno mismo es decir si tengo 5 sapatillas iguales me marcaria 1 sola y de esta forma me marca las 5
    return (
        <div className="tienda">
            <Link to={`cart`}>
                <div className="num">{cartNumber}</div>
                <div className="bolsa">
                    <BsCart3></BsCart3>
                </div>
            </Link>
        </div>
    )

}