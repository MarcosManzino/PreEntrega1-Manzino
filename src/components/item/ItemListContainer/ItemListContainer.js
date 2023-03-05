import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../products/products";

export default function ItemListContainer({ greeting }) {

    const [users, setUsers] = useState([]);
    const { category } = useParams(); // Obtener la categoría de la URL

    useEffect(() => {
        const promesaItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                // Filtrar los productos por la categoría
                let encontrados = products.filter((item) => item.categoria === category);
                resolve(encontrados);
            }, 100);
        });

        promesaItem.then((respuesta) => setUsers(respuesta));
    }, [category]); // Agregar la categoría como dependencia del useEffect

    return (

        <div>
            {greeting}
            <ul className="products">
                {users.map((user) => (
                    <li className="items" key={user.id}>
                        <img alt="/" src={process.env.PUBLIC_URL + user.img} />
                        <p>{user.precio}</p>
                        <div>
                            <button>añadir al carrito</button>
                            <button>ver mas</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


