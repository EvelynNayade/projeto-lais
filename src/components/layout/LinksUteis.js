import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa/index.esm";
import Container from './Container'
import styles from "./LinksUteis.module.css"
import LogoLais from "../img/logos/2-branca.png"



function LinksUteis(){
    return (
    <Container>
    <div className={styles.linksUteis}>
       <div className={styles.conteudo}>  
            <div className={styles.logo}>
                <img src={LogoLais} alt={"Logo LAIS"}/>
            </div>
            <div className={styles.links}>
                <p>Links Úteis</p>  
                <ul >
                    <li >
                        <Link to="/">Inicio</Link>
                    </li>
                    <li >
                        <Link to='/sobre_nos'>Sobre Nós</Link> 
                     </li>
                    <li >
                        <Link to='/cursos'>Módulos</Link> 
                    </li>
                    <li >
                        <Link to='/parceiros'>Parceiros</Link> 
                     </li>
                    <li >
                        <Link to='/transparencia'>Transparência</Link> 
                    </li>
                </ul>
            </div>
            <div className={styles.redesSociais}>
                <p>Redes Sociais</p>
                 <ul  >
                    <li  >
                        <Link to="/"><FaFacebook/></Link>
                    </li>
                    <li >
                        <Link to='/'> <FaTwitter/> </Link> 
                     </li>
                    <li >
                        <Link to='/'><FaInstagram /></Link> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </Container>
    )
}

export default LinksUteis