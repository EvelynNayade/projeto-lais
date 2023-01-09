import styles from './Inicio.module.css'
import Slide from '../conteudoPagInicial/Slide'
import ModulosInicial from '../conteudoPagInicial/ModulosInicial'
import ParceirosInicio from '../conteudoPagInicial/ParceirosInicio'

function Inicio(){
    return(
        <div className={styles.margin}>
           <div>
                <Slide/>
           </div>
           <div className={styles.conteudo}>
                <ModulosInicial />
                <ParceirosInicio/>
            </div>
           
        
        </div>
    ) 
   

}

export default Inicio