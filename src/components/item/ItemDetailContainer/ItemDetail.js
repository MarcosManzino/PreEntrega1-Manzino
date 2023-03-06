import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../products/products";

export default function ItemDetail({ greeting }) {
  const [user, setUsers] = useState([]);
  const params = useParams();
  const idUsers = params.idUsers;

  useEffect(() => {
    const promesaItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        let encontrado = products.find((item) => item.id === Number(idUsers));
        console.log(idUsers)
        resolve(encontrado);
        console.log(idUsers)
      }, 100);
    });

    promesaItem.then((respuesta) => setUsers(respuesta));
    

  }, [idUsers]);

  return (
    <div>
      {greeting}
      <ul className="products">
        <li className="items" key={user.id}>
          <img alt="/" src={process.env.PUBLIC_URL + user.img} />
          <p>{user.precio}</p>
          <div>
            <button>añadir al carrito</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
