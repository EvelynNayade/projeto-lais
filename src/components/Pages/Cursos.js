import { Link } from "react-router-dom";
import styles from "./Cursos.module.css";
import Container from "../layout/Container"
import { useState, useEffect } from "react";
import CardCurso from "../ConteudoPagCursos/CardCurso";
import Paginacao from "../layout/Paginacao.js";

const limite = 9;
function Cursos(){
    const [offset, setOffset] = useState(1);
    const [todo, setTodo] = useState([]);
    const [curso, setCurso] = useState([]);
    useEffect (() =>{
        fetch("http://localhost:5000/cursos",{
        method: "GET",
        headers:{
            'Content-Type': 'aplication/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setTodo(data)
    })
    .catch((err) => console.log(err))
    
    },[])
   
    useEffect (() =>{
        fetch(`http://localhost:5000/cursos?_page=${offset}&_limit=${limite}`,{
        method: "GET",
        headers:{
            'Content-Type': 'aplication/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setCurso(data)
    })
    .catch((err) => console.log(err))
    
    },[offset])
    
    const CursoGeral = curso.map((curso) => <CardCurso key={curso.id} curso={curso}/>)
    const total = todo.length
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
            <p className={styles.exibindo}> {limite} de {total} resultados</p>
            <div className={styles.cursos}>
                {CursoGeral}
            </div>
        </div>
        <div className={styles.paginacao}>
            <Paginacao 
            limit={limite} 
            total={total}
            offset={offset}
            setOffset={setOffset}
             />
            </div>
       </div>
    )
}

export default Cursos