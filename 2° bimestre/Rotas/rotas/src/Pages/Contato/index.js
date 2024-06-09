import { Link } from "react-router-dom";

function Contato() {
  return (
    <div className="container">
      <h1>Página de contato</h1>
      <sapn>42 xxxxx-xxxx</sapn>

      <div>
        <Link className="link" to="/">Sobre</Link>

        <Link className="link" to="/"></Link>

        <Link className="link" to="/produto">Produto</Link>
      </div>
    </div>
  );
}

export default Contato;
