import { useContext } from "react"
import { CartContext } from "../../context/carrito";
import { useState } from "react";
import { useEffect } from "react";



const CartT = () => {
  const { cart } = useContext(CartContext);
  const cartObject = Object.values(cart);
  const [form, setForm] = useState({ nombre: "", apellido: "", numero: 0, email1: "", email2: "" });
  const [esCompra, setEsCompra] = useState(false);
  let precioTotal = cartObject.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0);
  console.log(cartObject)

  useEffect(() => {
    if (form.nombre && form.apellido && Number(form.numero) && form.email1 && (form.email1 === form.email2)) {
      setEsCompra(true)
    }
  }, [form])


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  console.log(form)



  return (
    <>
      <p className="total-2 ">El total es : ${precioTotal.toLocaleString('es-ES')}</p>
      <div className="flexx">
        <div>

          <div className="cartContainer">



            {cartObject.map(producto => (

              <div className="cart" key={producto.id}>
                <img variant="top" src={process.env.PUBLIC_URL + producto.img[0]} />
                {/* IGM MAS CHICA */}
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

          <form action="">
            <h1>Informacion de compra</h1>
            <input onChange={handleChange} name="nombre" type="text" placeholder="Name" />
            <input onChange={handleChange} name="apellido" type="text" placeholder="Last name" />
            <input onChange={handleChange} name="numero" type="text" placeholder="phone Number" />
            <input onChange={handleChange} name="email1" type="email" placeholder="Email" />
            <input onChange={handleChange} name="email2" type="email" placeholder="Email" />
            <button disabled={!esCompra} >Comprar</button>
          </form>
        </div>


      </div>
    </>
  )
}

export default CartT