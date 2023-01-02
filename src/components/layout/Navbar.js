import { Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../img/logo-small.png";
import Container from "./Container";
import Button from "./Button";
import Busca from "./Busca";


function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container customClass="centralizar"> 
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/'>
                        <img src={logo} alt="AvaSus"/>
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link to='/'>Início</Link> 
                </li>
                <li className={styles.item}>
                    <Link to='/sobre_nos'>Sobre Nós</Link> 
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
                    <Link to='/contato'>Contato</Link>
                </li>
            </ul>
            <Busca/>
            <Button customClass="entrar">  
                <Link to='/entrar'>Entrar</Link>
            </Button>
            <Button customClass="cadastrar">  
                    <Link to='/entrar'>Cadastrar</Link>
            </Button>
            </Container>   
        </nav>

    )
}

export default Navbar