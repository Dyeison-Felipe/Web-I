import { BrowserRouter, Routes, Route} from "react-router-dom";
// imoportando paginas
import Home from "./Pages/Home"
import Erro from "./Pages/Erro"
import Contato from "./Pages/Contato"
import Produto from "./Pages/Produto"
import Sobre from "./Pages/Sobre"
//importando componentes
import Header from './Components/Header'

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/produto" element={<Produto/>}/>
        <Route path="*" element={<Erro/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;