import { Link } from "react-router-dom";
import styles from "./Cursos.module.css";
import Container from "../layout/Container"
import { useState, useEffect } from "react";
import CardCurso from "../ConteudoPagCursos/CardCurso";


function Cursos(){

    const [curso, setCurso] = useState([]);
    useEffect (() =>{
        fetch("http://localhost:5000/cursos?_limit=6",{
        method: "GET",
        headers:{
            'Content-Type': 'aplication/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setCurso(data)
    })
    .catch((err) => console.log(err))

    },[])

    return (
       <div className={styles.margin}>
        <Container>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link to="/">Início </Link>
                    </li>
                    <li>
                        /
                    </li>
                    <li>
                        <Link to="/cursos">Cursos </Link>
                    </li>
                    <li>
                        /
                    </li>
                    <li>
                        Módulos
                    </li>
                </ul>
             </nav>
        </Container>
        <div className={styles.conteudo}>
            <p className={styles.titulo}>Módulos Educacionais</p>
            <ul>
                <li>
                    <Link to=''> Covid 19 </Link>
                </li>
                <li>
                    <Link to=''> Sifilis e outras Ist's </Link>
                </li>
                <li>
                    <Link to=''> Preceptoria </Link>
                </li>
                <li>
                    <Link to=''> Doenças Raras </Link>
                </li>
                <li>
                    <Link to=''> Web Palestras </Link>
                </li>
                <li>
                    <Link to=''> sistemas Prisional </Link>
                </li>
                <li>
                    <Link to=''> OPAS </Link>
                </li>
            </ul>
            <p className={styles.exibindo}> 6 de 20 resultados</p>
            <div className={styles.cursos}>
                {curso.map((curso) => <CardCurso key={curso.id} curso={curso}/>)}
            </div>
        </div>
       </div>
    )
}

export default Cursos