import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import styles from "./Exibicao.module.css"

function ExibirEstrelas({avaliacao, customClass}){

    const star = parseFloat(avaliacao)
    const fullStar = Math.trunc(star);
    const halfStarfull = fullStar+0.75;
    const halfStarempty = fullStar+0.25;
    let estrelas = [];
    for(let i = 0; i<fullStar; i++){
        estrelas.push(<FaStar />)
    }
    if(halfStarfull < star) {
        estrelas.push(<FaStar />)
        for(let i = fullStar+1; i<5; i++){
        estrelas.push(<FaRegStar />)
        }   
    } else if(halfStarempty < star) {
        estrelas.push(<FaStarHalfAlt />)
        for(let i = fullStar+1; i<5; i++){
        estrelas.push(<FaRegStar />)
        }   
    }   else {
        for(let i = fullStar; i<5; i++){
            estrelas.push(<FaRegStar className={styles[customClass]}/>)
            } 
    }

    const separado = avaliacao.split('.');
    const newAvaliação = separado[0]+","+separado[1];

    return (
        <div className={styles[customClass]}>
        {estrelas}
        <p>{newAvaliação}</p>
        </div>
    )
}

export default ExibirEstrelas