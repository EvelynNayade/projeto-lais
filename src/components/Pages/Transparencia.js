import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import styles from "./Transparencia.module.css"
import Container from "../layout/Container";
import {BsFillPeopleFill} from "react-icons/bs"
import {FaFileUpload, FaGraduationCap, FaMoneyBill} from "react-icons/fa";
import {TbCertificate} from "react-icons/tb"


function Transparencia(){
    const [transparencia, setTransparencia] = useState([]);
    
    useEffect (() =>{
        fetch("http://localhost:5000/transparecia",{
        method: "GET",
        headers:{
            'Content-Type': 'aplication/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setTransparencia(data)
    })
    .catch((err) => console.log(err))  
    },[])
        const dados = transparencia.dados_gerais
        const usuarios_curso = transparencia.usuarios_por_curso
       
        return (
        <div className={styles.margin}>
            <Container>
                <nav className={styles.navbar}>
                    <ul>
                        <li>
                           <Link to="/">Início</Link>
                        </li>
                        <li>
                            /
                        </li>
                        <li>
                            Transparencia
                        </li>
                    </ul>
                </nav>
            </Container>
            <div className={styles.conteudo}>
            <h1>Transparência</h1>
            <div className={styles.fundo1}>
                <h3>Dados Gerais</h3>
                <div className={styles.linha1}>
                    <div className={styles.item1}>
                        <div className={styles.texto}>
                        <p><BsFillPeopleFill className={styles.svg}/></p>
                        <p> Total de usuários registrados</p>
                        </div>
                    </div>
                    <div className={styles.item2}>
                        <div className={styles.texto}>
                        <p><FaFileUpload className={styles.svg}/></p>
                        <p>Inscrições realizadas</p>
                        </div>  
                    </div>
                    <div className={styles.item3}>
                        <div className={styles.texto}>
                        <p><FaGraduationCap className={styles.svg}/></p>
                        <p>Cursos ativos</p>
                        </div>
                        
                    </div>
                    <div className={styles.item4}>
                        <div className={styles.texto}>
                        <p><TbCertificate className={styles.svg}/></p>
                        <p>Direito à Certificação</p>
                        </div>
                        
                    </div>
                </div>
                <div className={styles.linha2}>
                    <div className={styles.item5}>
                        <div className={styles.texto}>
                        <p><FaMoneyBill className={styles.svg}/></p>
                        <p> Investimento médio por curso</p>
                        </div>
                        
                    </div>
                    <div className={styles.item6}>
                        <div className={styles.texto}>
                        <p><FaMoneyBill className={styles.svg}/></p>
                        <p>Investimento médio por aluno</p>
                        </div>
                        
                    </div>
                    </div>
            </div>
            <div className={styles.fundo2}>
            <div className={styles.fundo21} >
            </div>
            <div className={styles.fundo21} ></div>
            </div>
            </div>
        </div>
    )
}

export default Transparencia