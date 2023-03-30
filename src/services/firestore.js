//import base
import { initializeApp } from "firebase/app";
import { addDoc, collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { getFirestore, } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyD8h1c939AbSaNEhj5e-1M9SLPLkcUqcUI",
    authDomain: "react-manzino.firebaseapp.com",
    projectId: "react-manzino",
    storageBucket: "react-manzino.appspot.com",
    messagingSenderId: "68079110821",
    appId: "1:68079110821:web:a873a9e506ebf12d125b4c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function createOrder(orderData) {
    console.log("todo ok", orderData)
    const collectionRef = collection(db, "ordenes")
    const respones = await addDoc(collectionRef, orderData);
    console.log("orden cerada correctaamente", respones.id)
    return respones.id

}




export async function getItemsForDatabase() {
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


