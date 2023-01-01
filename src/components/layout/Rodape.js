import styles from "./Rodape.module.css"

function Rodape(){
    return (
        <footer className={styles.rodape}>
          <p className={styles.texto}>2022 &copy; LAIS (HUOL). Todos os direitos reservados</p>
        </footer>
    )
}

export default Rodape