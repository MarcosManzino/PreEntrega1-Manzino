import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Item from "../ItemDetailContainer/Item";
import products from "../../products/products";
import { IoIosArrowRoundBack } from 'react-icons/io';

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

// funcion



// funcion


export default function ItemList({ greeting }) {

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














    const [users, setUsers] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        async function getProducts() {
            const productos = await getItemsForDatabase();
            let encontrados = productos.filter((item) => item.categoria === category);
            setUsers(encontrados)
            console.log(encontrados)
        }
        getProducts()
        // const promesaItem = new Promise((resolve, reject) => {
        //     setTimeout(() => {

        //         
        //         resolve(encontrados);
        //     }, []);
        // });

        // promesaItem.then((snapshotProduct) => setUsers(snapshotProduct));


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
