import styles from "./CardDadosGerais.module.css"
import {BsFillPeopleFill} from "react-icons/bs"

function CardDadosGerais({dados}){
    
    return(
        <div className={styles.fundo}>
            <h3>Dados Gerais</h3>
            <div className={styles.linha1}>
                <div className={styles.item}>
                    <p><BsFillPeopleFill/></p>
                    <></>
                </div>
            </div>
        </div>
    )
}

export default CardDadosGerais