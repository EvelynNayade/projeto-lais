import styles from "./Realizacao.module.css"
import Container from "./Container"
import logoLais from "../img/1-branca.png"
import logoURFN from "../img/logotipo_negativo.png"

function Realizacao(){
    return(
        <div className={styles.realizacao}>
            <p className={styles.texto}> Realização </p>
            <Container customClass="centralizar">
                <img className={styles.imagem} src={logoLais} alt="Logo LAIS"  />
                <img className={styles.imagem} src={logoURFN} alt="Logo URFN" />
            </Container>
            
        </div>
    )
}

export default Realizacao