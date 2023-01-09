import {MdSchedule} from  "react-icons/md";
import ExibirMatriculados from "../TratamentoNumeros/ExibirMatriculados"
import ExibirEestrelas from "../TratamentoNumeros/ExibirEstrelas"
import {BsFillCalendarCheckFill, BsFillPeopleFill} from 'react-icons/bs'
import styles from './Info.module.css'
function Info({curso}){
    let matriculados = curso.matriculados
    matriculados = matriculados.toLocaleString('pt-Br')
    return(
        <div className={styles.infos}>
           <h1>Informações Sobre o Curso</h1>
           <div className={styles.estatistica}>
                <div className={styles.duracao}>
                    <MdSchedule/>
                    <p>{curso.duracao}</p>
                </div>
                <p> <BsFillCalendarCheckFill/> Criado em: {curso.criado_em}</p>
                <div className={styles.duracao}>
                    <BsFillPeopleFill/>
                    <p>{matriculados}</p>
                </div>
                <p> <ExibirEestrelas avaliacao={curso.avaliacao}/> ({curso.numero_avaliacoes}) </p>
           </div>
        </div>

    )
}

export default Info