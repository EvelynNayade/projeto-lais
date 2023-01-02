import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa/index.esm";
import Container from './Container'
import styles from "./LinksUteis.module.css"
import LogoLais from "../img/2-branca.png"



function LinksUteis(){
    return (
    <div className={styles.linksUteis}>
       <Container customClass={"centralizar-topo"}>  
            <div className={styles.logo}>
                <img src={LogoLais} alt={"Logo LAIS"} width="75%"/>
            </div>
            <div className={styles.links}>
                <p>Links Úteis</p>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/sobre_nos'>Sobre Nós</Link> 
                     </li>
                    <li className={styles.item}>
                        <Link to='/cursos'>Módulos</Link> 
                    </li>
                    <li className={styles.item}>
                        <Link to='/parceiros'>Parceiros</Link> 
                     </li>
                    <li className={styles.item}>
                        <Link to='/transparencia'>Transparência</Link> 
                    </li>
                </ul>
            </div>
            <div className={styles.redesSociais}>
                <p>Redes Sociais</p>
                 <ul className={styles.redes} >
                    <li className={styles.itemRedes} >
                        <Link to="/"><FaFacebook/></Link>
                    </li>
                    <li className={styles.itemRedes}>
                        <Link to='/'><FaTwitter/></Link> 
                     </li>
                    <li className={styles.itemRedes}>
                        <Link to='/'><FaInstagram /></Link> 
                    </li>
                </ul>
            </div>
        </Container>
    </div>

    )
}

export default LinksUteis