import styles from './Cabecalho.module.css'
import { Link} from "react-router-dom";

function Cabecalho({capa, titulo, parceiros}){
    return(
        <div className={styles.topo}>
            <img src={capa}/>
                <div className={styles.texto}>
                    <ul>
                        <li>
                            <Link to="/">Início /</Link>
                        </li>
                        <li>
                            <Link to="/cursos">Cursos /</Link>
                        </li>
                        <li>
                            <Link to="/cursos">Módulos /</Link>
                        </li>
                        <li>
                            {titulo}
                        </li>
                    </ul>
                    <h1>{titulo}</h1>
                    <h2>{parceiros}</h2>
            </div>
        </div>
    )
}

export default Cabecalho