import styles from "./CardCurso.module.css"
import { Link } from "react-router-dom"
import ExibirDuracao from "../TratamentoNumeros/ExibirDuracao";
import ExibirEstrelas from "../TratamentoNumeros/ExibirEstrelas"
import ExibirMatriculados from "../TratamentoNumeros/ExibirMatriculados"

function CardCurso({curso}){
    
    const separado = curso.resumo.split('Ver mais');
    const newResumo = separado[0]+"..."


    return(
        
        
        <div className={styles.fundo}>
            <img src={curso.capa}></img>
            <div className={styles.nome}> {curso.titulo} </div>
            <div className={styles.realizacao}> {curso.parceiros}</div>
            <div className={styles.estatistica}>
                <ExibirMatriculados customClass="curso" matriculados={curso.matriculados}/>
                <ExibirDuracao customClass="curso" duracao={curso.duracao} extenso={false}/>
                <ExibirEstrelas customClass="curso" avaliacao={curso.avaliacao}/>
            </div>
            <div className={styles.resumo}> {newResumo} </div>
           <div className={styles.verCurso}> <Link to={`/curso/${curso.id}`} >Ver Curso</Link></div>
        </div>
    
        
    )
}

export default CardCurso