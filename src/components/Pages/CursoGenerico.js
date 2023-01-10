import { useParams } from "react-router-dom";
//import Creditos from "../ConteudoPagCursoGen/Creditos";
import { useEffect, useState } from "react";
import Cabecalho from "../ConteudoPagCursoGen/Cabecalho";
import styles from "./CursoGenerico.module.css";
import { MdSchedule } from "react-icons/md";
import {BsFillCalendarCheckFill, BsFillPeopleFill} from 'react-icons/bs'
import { FaStar } from "react-icons/fa";


function CursoGenerico(){   
    const { id } = useParams();
    const [curso, setCurso] = useState([])

    useEffect (() =>{
        fetch( `http://localhost:5000/cursos/${id}`,{
        method: "GET",
        headers:{
            'Content-Type': 'aplication/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setCurso(data)
    })
    .catch((err) => console.log(err))
    },[id])
    const cred = curso.creditos;
    console.log(cred)
    return( 
            <>
           	<Cabecalho capa={curso.capa} titulo={curso.titulo} parceiros={curso.pareceiros}/>
            <div className={styles.infos}>
                <h1>Informações Sobre o Curso</h1>
            </div>
            <div className={styles.estatistica}>
                <div className={styles.item}>
                    <MdSchedule/>
                    <p>{curso.duracao}</p>
                </div>
                <div className={styles.item}>
                    <BsFillCalendarCheckFill/>
                    <p>Desde: {curso.criado_em}</p> 
                </div>
                <div className={styles.item}>
                    <BsFillPeopleFill></BsFillPeopleFill>
                   <p>{curso.matriculados} alunos matriculados </p>
                </div>
                <div className={styles.item}>
                    <FaStar/>
                   <p>{curso.avaliacao} ({curso.numero_avaliacoes} avaliações) </p>
                </div>
           </div>
           <div className={styles.sobre}>
                <h2> Sobre o curso </h2>
                <p> {curso.sobre}</p>
                <h2>Objetivos</h2>
                <h3>Objetivo Geral</h3>
                <p>{curso.objetivo_geral}</p>
                <h3  className={styles.objetivos}>Objetivos Específicos</h3>
                <p>{curso.objetivo_especifico}</p>
                <h2>Recuroso educacionais</h2>
                <p>
                    Serão utilizados textos no formato de PDF, vídeos, ilustrações, infográficos, dentre outros recursos.
                </p>
                <h2> Créditos </h2>
                <div className={styles.creditos}>
                 </div>
            </div>
           
                    
            </>
        )

}
export default CursoGenerico