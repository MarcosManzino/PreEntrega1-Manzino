import { useContext } from "react"
import { CartContext } from "../../context/carrito";
import { BsFillTrash3Fill } from "react-icons/bs";
import Checkout from "./Checkout";




const CartT = () => {
  const { cart } = useContext(CartContext);
  const { vaciarCarrito } = useContext(CartContext)
  const cartObject = Object.values(cart);

  let precioTotal = cartObject.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0);





  return (
    <>
      <p className="total-2 ">El total es : ${precioTotal.toLocaleString('es-ES')}</p>
      <div className="flexx">
        <div>

          <div className="cartContainer">



            {cartObject.map(producto => (

              <div className="cart" key={producto.id}>
                <button className="eliminar" onClick={vaciarCarrito}><BsFillTrash3Fill/></button>
                <img variant="top" alt={"imagen de" + producto.titulo} src={process.env.PUBLIC_URL + producto.img[0]} />
                <div className="text">
                  <p>{producto.titulo}</p>
                  <p>${producto.precio.toLocaleString('es-ES')}</p>
                  <p>Cantidad : {producto.cantidad}</p>
                </div>
              </div>

            ))}

          </div>
        </div>
        <div className="form-sign">


          <Checkout precio={precioTotal} cart={cart} />
        </div>


      </div>
    </>
  )
}

export default CartT