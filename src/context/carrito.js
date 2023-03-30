import { createContext, useState } from "react"



export const CartContext = createContext();
const ShoppingCart = ({ children }) => {
    const [cart, setCart] = useState([]);
    const agregarAlCarrito = (producto) => {
        const prevProducto = cart[producto.id]
        const prevCantidad = prevProducto?.cantidad || 0
        setCart(prev => ({
            ...prev,
            [producto.id]: {
                ...producto,
                cantidad: producto.cantidad + prevCantidad
            }
        }))

    }

    const vaciarCarrito= ()=>{
        setCart ({})
    }



    return (
        <CartContext.Provider value={{ cart, setCart, agregarAlCarrito,  vaciarCarrito}}>{children}</CartContext.Provider>
    )
}

export default ShoppingCart;