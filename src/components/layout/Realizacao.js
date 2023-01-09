import styles from "./Realizacao.module.css"
import Container from "./Container"
import logoLais from "../img//logos/1-branca.png"
import logoURFN from "../img/logos/logotipo_negativo.png"

function Realizacao(){
    return(
        <Container>
        <div className={styles.realizacao}>
            <p className={styles.texto}> Realização </p>
            <div className={styles.imagens}>
            <img src={logoLais} alt="Logo LAIS"  />
            <img src={logoURFN} alt="Logo URFN" />
            </div>
        </div>
        </Container>
    )
}

export default Realizacao