import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../../products/products";
import { IoIosArrowRoundBack } from 'react-icons/io';
import { CartContext } from "../../../context/carrito";
import { useContext } from "react";
















//import base
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";


// base-----------------------


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8h1c939AbSaNEhj5e-1M9SLPLkcUqcUI",
  authDomain: "react-manzino.firebaseapp.com",
  projectId: "react-manzino",
  storageBucket: "react-manzino.appspot.com",
  messagingSenderId: "68079110821",
  appId: "1:68079110821:web:a873a9e506ebf12d125b4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);




//base--------------------

















export default function ItemDetail({ greeting }) {
  const [user, setUsers] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const params = useParams();
  const idUsers = params.idUsers;
  const { agregarAlCarrito } = useContext(CartContext);













  async function getItemsForDatabase() {
    const productosColectionRef = collection(db, "products")

    let snapshotProduct = await getDocs(productosColectionRef)
    const documents = snapshotProduct.docs;

    const dataProduct = documents.map(doc => {
      const product = doc.data();
      product.id = doc.id;
      return product
    })


    return dataProduct

  }















  const handleAdd = () => {
    agregarAlCarrito(user);

  }
  const handleCantidad = e => {
    setUsers({ ...user, cantidad: Number(e.target.value) })


  }
  console.log(user)

  useEffect(() => {
    async function getProducts() {
      const producto = await getItemsForDatabase();
      let encontrado = producto.find((item) => item.id === idUsers);
      encontrado["cantidad"] = 1
      setUsers(encontrado)
      console.log(encontrado)

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
