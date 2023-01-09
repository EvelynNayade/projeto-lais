import {BsFillPeopleFill} from "react-icons/bs"
import styles from "./Exibicao.module.css"

function ExibirMatriculados({matriculados, customClass}){
    let newMatriculados = '';
    let strMatriculados = matriculados.toString();
    const Maior1000 = matriculados/1000.0;
    const Maior10000 = matriculados/10000.0;
    
    if(Maior10000>1){
        newMatriculados = strMatriculados[0]+strMatriculados[1]+"."+strMatriculados[2]+strMatriculados[3]+strMatriculados[4]
    } else if (Maior1000>1){
        newMatriculados = strMatriculados[0]+"."+strMatriculados[1]+strMatriculados[2]+strMatriculados[3]
    } else {
        newMatriculados = strMatriculados
    }
    
    return(
    <div className={styles[customClass]}>
    <BsFillPeopleFill/>
    <p>{newMatriculados}</p>
    </div>
    )
}

export default ExibirMatriculados