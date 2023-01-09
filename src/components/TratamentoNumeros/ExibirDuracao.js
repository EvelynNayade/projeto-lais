import {MdSchedule} from  "react-icons/md";
import styles from "./Exibicao.module.css";

function ExibirDuracao({duracao, extenso, customClass}){
    let Newduracao = ''
    const split = duracao.split("h")  
    if(split[1]===''){
        Newduracao = split[0] +"h" 
    } else {
        Newduracao = split[0] + "h" + split[1] +" min"
    } 
    return(
    <div className={styles[customClass]}>
        <MdSchedule/>
        <p>{Newduracao}</p>
    </div>
    )
}

export default ExibirDuracao