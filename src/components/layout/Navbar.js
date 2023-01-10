import { Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../img//logos/logo.png";
import Container from "./Container";
import Button from "./Button";
import Busca from "./Busca";
//import SearchBar from '@mkyy/mui-search-bar';


function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container customClass="centralizar"> 
            <Link to='/'>
                <img className={styles.logotipo} src={logo} alt="AvaSus"/>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/'>Início</Link> 
                </li>
                <li className={styles.item}>
                    <Link to=''>Sobre Nós</Link> 
                </li>
                <li className={styles.item}>
                    <Link to='/cursos'>Cursos</Link> 
                </li>
                <li className={styles.item}>
                    <Link to='/parceiros'>Parceiros</Link> 
                </li>
                <li className={styles.item}>
                    <Link to='/transparencia'>Transparência</Link> 
                </li>
                <li className={styles.item}>
                    <Link to=''>Contato</Link>
                </li>
            </ul>
            <Busca/>
            <Button customClass="entrar" to='' text="Entrar">  
            </Button>
            <Button customClass="cadastrar" to='' text="Cadastrar">  
            </Button>
            </Container>   
        </nav>

    )
}

export default Navbar