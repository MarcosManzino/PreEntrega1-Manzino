import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Item from "../ItemDetailContainer/Item";
import { IoIosArrowRoundBack } from 'react-icons/io';
import { getItemsForDatabase } from "../../../services/firestore";




export default function ItemList({ greeting }) {
    


    const [users, setUsers] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        async function getProducts() {
            const productos = await getItemsForDatabase();
            let encontrados = productos.filter((item) => item.categoria === category);
            setUsers(encontrados)
        
        }
        getProducts()
   

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
