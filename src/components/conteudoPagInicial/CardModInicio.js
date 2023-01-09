import styles from './CardModInicio.module.css';
import Button from "../layout/Button"
import ExibirEstrelas from '../TratamentoNumeros/ExibirEstrelas';
import ExibirDuracao from '../TratamentoNumeros/ExibirDuracao';
import ExibirMatriculados from '../TratamentoNumeros/ExibirMatriculados';


function CardModInicio({curso}){

  
    return(
        <div className={styles.fundo}>
            <img src={curso.capa}></img>
            <div className={styles.texto}>
                <p className={styles.titulo}>{curso.titulo}</p>
                <p className={styles.realizacao}>{curso.parceiros}</p>
            </div>
            <div className={styles.estatistica}>
                <ExibirMatriculados customClass="inicio" matriculados={curso.matriculados}/>
                <ExibirDuracao customClass="inicio" duracao={curso.duracao} extenso={false}/>
                <ExibirEstrelas customClass="starI" avaliacao={curso.avaliacao}/>
            </div>  
            <div className={styles.botao}><Button customClass="verModulo" text={"Ver Módulo"} to={`/curso/${curso.id}`}/></div>
        </div>
    )
}

export default CardModInicio