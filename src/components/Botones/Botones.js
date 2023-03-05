
import Categoria from "../Categoria/Categoria";







export default function Botones() {



    const categorias = [{ nombre: "Zapatillas", img: process.env.PUBLIC_URL + "/img/zapas.jpg" }, { nombre: "Camperas", img: process.env.PUBLIC_URL + "/img/camperas.jpg" }, { nombre: "Buzos", img: process.env.PUBLIC_URL + "/img/buzo.jpg" }]


    return (

        <ul className="ropa">
            {categorias.map((categoria, idx) => <Categoria key={idx} nombre={categoria.nombre} imgSrc={categoria.img} />)}

        </ul>

    )



}
