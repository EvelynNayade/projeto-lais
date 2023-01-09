import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "../layout/Button";
import CardModInicio from "./CardModInicio";
import {AiOutlineLine} from "react-icons/ai";

import styles from "./ModulosInicial.module.css";


function ModulosInicial(){

    const [cursoP, setCursoP] = useState([]);
    useEffect (() =>{
        fetch("http://localhost:5000/cursos?_sort=matriculados&_order=desc&_limit=3",{
        method: "GET",
        headers:{
            'Content-Type': 'aplication/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setCursoP(data)
    })
    .catch((err) => console.log(err))

    },[])
    const popCurso = cursoP.map((curso) => <CardModInicio key={curso.id} curso={curso}/>);



    const [cursoA, setCursoA] = useState([]);
    useEffect (() =>{
        fetch("http://localhost:5000/cursos?_sort=avaliacao&_order=desc&_limit=3",{
        method: "GET",
        headers:{
            'Content-Type': 'aplication/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setCursoA(data)
    })
    .catch((err) => console.log(err))

    },[])
    const AvCurso = cursoA.map((curso) => <CardModInicio key={curso.id} curso={curso}/>);



    const [cursoR, setCursoR] = useState([]);
    useEffect (() =>{
        fetch("http://localhost:5000/cursos?_sort=criado_em&_order=desc&_limit=3",{
        method: "GET",
        headers:{
            'Content-Type': 'aplication/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setCursoR(data)
    })
    .catch((err) => console.log(err))

    },[])
    const RecCurso = cursoR.map((curso) => <CardModInicio key={curso.id} curso={curso}/>);

    const [filtro, setFiltro] = useState(1);
    function goToPop(){
        setFiltro(1);
    }
    function goToAv(){
        setFiltro(2);
    }
    function goToRec(){
        setFiltro(3);
    }

    return(
        <div className={styles.fundo}>
            <p className={styles.titulo}>Módulos Educaionais</p>
            <div>
                {filtro == 1 &&(
                    <>
                    <ul className={styles.opcoes}>
                    <li className={styles.ativo}>
                        <Link onClick={goToPop}> Mais Populares </Link>
                    </li>
                    <li>
                        <Link onClick={goToAv}> Mais bem avaliados</Link>
                    </li>
                    <li>
                        <Link onClick={goToRec}>Mais recentes</Link>
                    </li>
                    </ul>
                    {popCurso}
                    </>
                )
                }
                {filtro == 2 &&
                    <>
                    <ul className={styles.opcoes}>
                    <li >
                        <Link onClick={goToPop}> Mais Populares </Link>
                    </li>
                    <li className={styles.ativo}>
                        <Link onClick={goToAv}> Mais bem avaliados</Link>
                    </li>
                    <li>
                        <Link onClick={goToRec}>Mais recentes</Link>
                    </li>
                    </ul>
                    {AvCurso}
                    </>
                }
                {filtro == 3 &&
                    <>
                    <ul className={styles.opcoes}>
                    <li>
                        <Link onClick={goToPop}> Mais Populares </Link>
                    </li>
                    <li>
                        <Link onClick={goToAv}> Mais bem avaliados</Link>
                    </li>
                    <li className={styles.ativo}>
                        <Link onClick={goToRec}>Mais recentes</Link>
                    </li>
                    </ul>
                    {RecCurso}
                    </>
                }
                </div>
                <div className={styles.botao}>
                    <Button customClass="verMais" text="Ver Mais" to ="/cursos"></Button>
                </div>
        </div>
    )
}

export default ModulosInicial