import styles from "./CardParInicio.module.css"; 
    
    function CardParInicio({parceiros}){
        const nomes = parceiros.map((parceiros) =>
          <div key={parceiros.id}>
            <p >{parceiros.nome}</p>
          </div>
          );

          const sigla = parceiros.map((parceiros) =>
          <div key={parceiros.id}>
            <p>{parceiros.sigla}</p>
          </div>
          );

        return(
            <div className={styles.fundo}>
               <div className={styles.siglas}> {sigla} </div>
               <div className={styles.nomes}> {nomes} </div> 
            </div>
        )
    }

    export default CardParInicio