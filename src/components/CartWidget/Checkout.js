import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../../services/firestore'
import Swal from 'sweetalert2'
import { CartContext } from '../../context/carrito'

export default function Checkout({ cart, precio }) {
    const {vaciarCarrito} = useContext(CartContext) 
    const navigateTo = useNavigate();
    const [form, setForm] = useState({ nombre: "", apellido: "", numero: 0, email1: "", email2: "" });
    const [esCompra, setEsCompra] = useState(false);


    const alerta = (id) => {

        Swal.fire({

            icon: "success",
            title: "Gracias por su compra",
            text: "el Numero de orden es : "+ id,
        })
    }

    async function handleCHeckout() {
        const orderData = {
            comprador: form,
            items: cart,
            total: precio,
            timestap: new Date(),
        }
        const id = await createOrder(orderData)


        alerta(id)



        navigateTo("/")

        vaciarCarrito()
    }

    useEffect(() => {
        if (form.nombre && form.apellido && Number(form.numero) && form.email1 && form.email2 && (form.email1 === form.email2)) {
            setEsCompra(true)

        }
    }, [form])


    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    


    return (
        <>
            <form action="">
                <h1>Informacion de compra</h1>
                <input onChange={handleChange} name="nombre" type="text" placeholder="Name" />
                <input onChange={handleChange} name="apellido" type="text" placeholder="Last name" />
                <input onChange={handleChange} name="numero" type="text" placeholder="phone Number" />
                <input onChange={handleChange} name="email1" type="email" placeholder="Email" />
                <input onChange={handleChange} name="email2" type="email" placeholder="Email" />

            </form>
            <button disabled={!esCompra} onClick={handleCHeckout}>Comprar</button>
        </>




    )
}
