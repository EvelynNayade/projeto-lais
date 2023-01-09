import styles from "./CardParceiros.module.css" 

function CardParceiros ({parceiro}){
    return(
        <div className={styles.fundo}>
        <img src={parceiro.capa} alt={parceiro.titulo}/>
        <hr/>
        <p>{parceiro.titulo}</p>
        </div>
    )
}

export default CardParceiros