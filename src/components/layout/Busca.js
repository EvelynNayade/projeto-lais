import styles from './Busca.module.css'

function Busca(props) {
    
  return (
        <>
            <input  type={"search"} placeholder ={ "Buscar por um assunto..."} className={styles.busca} >
                {props.children}
            </input>
        </>
  )
    
}

export default Busca