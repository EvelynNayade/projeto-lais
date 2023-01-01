import { Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../logo-small.png";
import Container from "./Container";

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
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
                <li >
                    <button>Entrar</button>
                </li>
                <li >
                    <button>Cadastrar</button>
                </li>
            </ul>
            </Container>   
        </nav>

    )
}

export default Navbar