import styles from "./Creditos.module.css"

function Creditos({creditos}){

    return (
        <div className={styles.creditos}>
            {creditos.map((creditos) => <img src={creditos.capa}/>)}
        </div>
        )
}

export default Creditos