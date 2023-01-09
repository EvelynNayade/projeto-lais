import CardParInicio from "./CardParInicio"
import styles from "./ParceirosInicio.module.css"

const parceiros = [
    {
        id:1, 
        nome: "Governo do Estado do Rio Grande do Norte.", 
        sigla:"Governo do RN"
    },
    {
        id:2, 
        nome: "Secretaria de Saúde do Estado do Rio Grande do Norte", 
        sigla:"SESAP"
    },
    {
        id:3, 
        nome: "Universidade Federal do Rio Grande do Norte.", 
        sigla:"UFRN"
    },
    {
        id:4, 
        nome: "Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte). ", 
        sigla:"HUOL"
    }
]


function ParceirosInicio(){
    return(
        <div className={styles.fundo}>
        <p className={styles.titulo}>Parceiros</p>
        <CardParInicio parceiros={parceiros}/>
        </div>
    )
}

export default ParceirosInicio