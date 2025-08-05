import { Link } from "react-router-dom";

function Contato() {
    return(
        <div>
            <h1>Página de Contato</h1>
            <p>Contato da Empresa X - (dd) xxxxx-xxxx</p>
            <br/>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
        </div>
    )
}

export default Contato;