import { Link } from "react-router-dom";

function Erro() {
  return (
    <div className="container">
      <h2>Ops! Parece que essa página não existe...</h2>

      <span>Econtramos essas páginas aqui</span>

      <div>
        <Link className="link" to="/">Home</Link>

        <Link className="link" to="/sobre">Sobre</Link>

        <Link className="link" to="/contato">Contato</Link>

        <Link className="link" to="/produto">Produto</Link>
      </div>
    </div>
  );
}

export default Erro;
