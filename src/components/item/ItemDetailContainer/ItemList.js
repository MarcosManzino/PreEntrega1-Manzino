import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Item from "../ItemDetailContainer/Item";
import products from "../../products/products";
import { IoIosArrowRoundBack } from 'react-icons/io';




export default function ItemList({ greeting }) {

    const [users, setUsers] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const promesaItem = new Promise((resolve, reject) => {
            setTimeout(() => {

                let encontrados = products.filter((item) => item.categoria === category);
                resolve(encontrados);
            }, 2000);
        });

        promesaItem.then((respuesta) => setUsers(respuesta));

    }, [category]);

    return (

        <div>
            <button className="volver">
                <Link to={`/`}><IoIosArrowRoundBack />   volver</Link>
            </button>
            {greeting}
            <ul className="products">
                {users.map((user) => (
                    <Item key={user.id} producto={user} />
                ))}
            </ul>
        </div>
    );
}
