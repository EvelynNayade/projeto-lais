import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//Layout
import Navbar from './components/layout/Navbar';
import Rodape from './components/layout/Rodape';
import Container from './components/layout/Container';
import LinksUteis from './components/layout/LinksUteis';
import Realizacao from './components/layout/Realizacao';
//Paginas
import Contato from './components/Pages/Contato';
import Cursos from './components/Pages/Cursos';
import SobreNos from './components/Pages/SobreNos';
import Parceiros from './components/Pages/Parceiros';
import Transparencia from './components/Pages/Transparencia'
import Inicio from './components/Pages/Inicio';
import EntrarCadastrar from './components/Pages/EntrarCadastrar';



function App() {

  
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
      <Routes>
        <Route exact path='/' element={<Inicio/>} />
        <Route exact path='/sobre_nos' element={<SobreNos/>} />
        <Route exact path='/cursos' element={<Cursos/>} /> 
        <Route exact path='/parceiros' element={<Parceiros/>} />     
        <Route exact path='/transparencia' element={<Transparencia/>} />     
        <Route exact path='/contato' element={<Contato/>} /> 
        <Route exact path='/entrar' element={<EntrarCadastrar/>} />
      </Routes>
      </Container>
      <Realizacao/>
      <LinksUteis/>
     <Rodape/>
   </Router>
  )

}

export default App;
