import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../../products/products";



export default function ItemListContainer({ greeting }) {

    const [users, setUsers] = useState([]);
    const { category } = useParams(); 

    useEffect(() => {
        const promesaItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                
                let encontrados = products.filter((item) => item.categoria === category);
                resolve(encontrados);
            }, 100);
        });

        promesaItem.then((respuesta) => setUsers(respuesta));
    }, [category]); 

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
                            <button> <Link to={`${user.id}`}>Ver mas</Link> </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}


