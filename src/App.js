import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//Layout
import Navbar from './components/layout/Navbar';
import Rodape from './components/layout/Rodape';
import Container from './components/layout/Container';
import LinksUteis from './components/layout/LinksUteis';
import Realizacao from './components/layout/Realizacao';
//Paginas
import Cursos from './components/Pages/Cursos';
import Parceiros from './components/Pages/Parceiros';
import Transparencia from './components/Pages/Transparencia'
import Inicio from './components/Pages/Inicio'; 
import CursoGenerico from './components/Pages/CursoGenerico';



function App() {

  
  return (
    <Router>
      <Navbar/>
      <Container customClass="margintop">
      <Routes>
        <Route exact path='/' element={<Inicio/>} />
        <Route exact path='/cursos' element={<Cursos/>} /> 
        <Route exact path='/parceiros' element={<Parceiros/>} />     
        <Route exact path='/transparencia' element={<Transparencia/>} />     
        <Route path='/curso/:id' element={<CursoGenerico/>} />
      </Routes>
      </Container>
      <Realizacao/>
      <LinksUteis/>
      <Rodape/>
   </Router>
  )

}

export default App;
