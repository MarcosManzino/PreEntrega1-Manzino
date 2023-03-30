import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowRoundBack } from 'react-icons/io';
import { CartContext } from "../../../context/carrito";
import { useContext } from "react";
import { getItemsForDatabase } from "../../../services/firestore";



export default function ItemDetail({ greeting }) {
  const [user, setUsers] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const params = useParams();
  const idUsers = params.idUsers;
  const { agregarAlCarrito } = useContext(CartContext);


  const handleAdd = () => {
    agregarAlCarrito(user);

  }
  const handleCantidad = e => {
    setUsers({ ...user, cantidad: Number(e.target.value) })


  }


  useEffect(() => {
    async function getProducts() {
      const producto = await getItemsForDatabase();
      let encontrado = producto.find((item) => item.id === idUsers);
      encontrado["cantidad"] = 1
      setUsers(encontrado)
   

    }
    getProducts()


  }, [idUsers]);

  useEffect(() => {
    if (user) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = prevIndex + 1;
          return newIndex >= user.img.length ? 0 : newIndex;
        });
      }, 1000);
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
              <p>${user.precio.toLocaleString('es-ES')}</p>
              <div className="selebet">
                <button onClick={handleAdd}>añadir al carrito</button>
                <select className="selec" onChange={handleCantidad}>
                  <option className="opt" value={1}>1</option>
                  <option className="opt" value={2}>2</option>
                  <option className="opt" value={3}>3</option>
                  <option className="opt" value={4}>4</option>
                  <option className="opt" value={5}>5</option>
                  <option className="opt" value={6}>6</option>
                  <option className="opt" value={7}>7</option>
                  <option className="opt" value={8}>8</option>
                  <option className="opt" value={9}>9</option>
                  <option className="opt" value={10}>10</option>
                </select>
              </div>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}
