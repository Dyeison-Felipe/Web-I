import { Link } from "react-router-dom";
import '../App.css';

function Header(){
  return(
    <header>
      <div className="navbar">
        
      <Link className="link" to='/'>Home</Link>

      <Link className="link" to='/sobre'>Sobre</Link>


      <Link className="link" to='/contato'>Contato</Link>


      </div>
    </header>
  )
}

export default Header;