import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../../products/products";
import { IoIosArrowRoundBack } from 'react-icons/io';

export default function ItemDetail({ greeting }) {
  const [user, setUsers] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const params = useParams();
  const idUsers = params.idUsers;

  useEffect(() => {
    const promesaItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        let encontrado = products.find((item) => item.id === Number(idUsers));

        if (encontrado) {
          console.log("exit");
          resolve(encontrado);
        } else {
          console.log("error");
          reject("User not found");
        }
      }, 2000);
    });

    promesaItem
      .then((respuesta) => setUsers(respuesta))
      .catch((error) => console.log(error));
  }, [idUsers]);

  useEffect(() => {
    if (user) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = prevIndex + 1;
          return newIndex >= user.img.length ? 0 : newIndex;
        });
      }, 2000);
      return () => clearInterval(interval);
    }



  }, [user]);

  return (

    <div>
      <button className="volver">
        <Link to={`/producto/${user.categoria}`}><IoIosArrowRoundBack />   volver</Link>
      </button>
      {greeting}
      <ul className="products detalle">
        {user && (
          <li className="items" key={user.id}>
            <img alt="/" src={process.env.PUBLIC_URL + user.img[currentIndex]} />
            <div className="info">
              <p>{user.titulo}</p>
              <p>{user.precio}</p>
              <div>
                <button>añadir al carrito</button>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
