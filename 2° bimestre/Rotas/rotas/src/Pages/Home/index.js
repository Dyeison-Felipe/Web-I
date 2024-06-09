import { Link } from "react-router-dom";
import "../../App.css";

function Home() {
  return (
    <div className="container">
      <h1>Bem-Vindo a página Home</h1>
        <sapn>Dyeison Felipe</sapn>
      <div>

        <Link className="link" to="/sobre">Sobre</Link>

        <Link className="link" to="/contato">Contato</Link>

        <Link className="link" to="/produto">Produto</Link>
      </div>
    </div>
  );
}

export default Home;
