
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


export default function NavBar() {
    return (
        <header>
            <div className="cuerpo-up-2">


             

                <div className="cuerpo-up-logo">
                    <Link className="logo" to="/"><img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="Logo" /></Link>

                </div>

                <CartWidget />

            </div >
        </header>

    )

}

