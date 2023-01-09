import styles from './Busca.module.css'
//import { FaFacebook } from 'react-icons/fa/index.esm'

function Busca(props) {
    
  return (
        <>
           
            <input  type={"search"} placeholder ={"Buscar por um assunto..."} className={styles.busca} >
                {props.children}
            </input>
        </>
  )
    
}

export default Busca