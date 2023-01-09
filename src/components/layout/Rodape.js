import styles from "./Rodape.module.css"
import Container from "./Container"

function Rodape(){
    return (
        <Container>
        <footer className={styles.rodape}>
          <p className={styles.texto}>2022 &copy; LAIS (HUOL). Todos os direitos reservados</p>
        </footer>
        </Container>
    )
}

export default Rodape