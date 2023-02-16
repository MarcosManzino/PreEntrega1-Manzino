
import Categoria from "./Categoria";

import zapas from "../imagenes/zapas.jpg";
import camperas from "../imagenes/camperas.jpg";
import buzo from "../imagenes/buzo.jpg";




export default function Botones() {



    const categorias = [{ nombre: "Zapatillas", img: zapas }, { nombre: "Camperas", img: camperas }, { nombre: "Buzos", img: buzo }]


    return (

        <ul className="ropa">
            {categorias.map((categoria, idx) => <Categoria key={idx} nombre={categoria.nombre} imgSrc={categoria.img} />)}

        </ul>

    )



}
