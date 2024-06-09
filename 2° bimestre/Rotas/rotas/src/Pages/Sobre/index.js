import { Link } from "react-router-dom";

function Sobre() {
  return (
    <div className="container">
      <h1>Página sobre a empresa</h1>
      <sapn>CAMPO REAL </sapn>

      <div>
        <Link className="link" to="/">Home </Link>

        <Link className="link" to="/contato">Contato</Link>

        <Link className="link" to="/produto">Produto</Link>
      </div>
    </div>
  );
}

export default Sobre;
