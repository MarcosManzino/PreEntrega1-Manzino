
import logo from "../imagenes/logo.png";
import CartWidget from './CartWidget';


export default function NavBar() {
    return (
        <header>
            <div className="cuerpo-up-2">


                <select className="contacto">
                    <option>Zapatillas</option>
                    <option>Camperas</option>
                    <option>Buzos</option>
                </select>
                
                <div className="cuerpo-up-logo">
                    <a className="logo" href="index.html"><img src={logo} alt="Logo" /></a>

                </div>

                <CartWidget />
                
            </div >
        </header>

    )

}

