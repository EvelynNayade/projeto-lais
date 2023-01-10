import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Parceiros.module.css"
import CardParceiros from "../ConteudoPagParceiros/CardParceiros";
import Container from "../layout/Container";
import Paginacao from "../layout/Paginacao.js";

const limite = 9;

function Parceiros(){
    const [parceiro, setParceiro] = useState([]);
    const [total, setTotal] = useState([]);
    const [offset, setOffset] = useState(1);
    
    useEffect (() =>{
        fetch( `http://localhost:5000/parceiros`,{
        method: "GET",
        headers:{
            'Content-Type': 'aplication/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setTotal(data)
    })
    .catch((err) => console.log(err))
    },[])

    useEffect (() =>{
        fetch( `http://localhost:5000/parceiros?_page=${offset}&_limit=${limite}`,{
        method: "GET",
        headers:{
            'Content-Type': 'aplication/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setParceiro(data)
    })
    .catch((err) => console.log(err))

    },[offset])
        const nResultados = total.length;
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
                            Parceiros
                        </li>
                    </ul>
                </nav>
            </Container>
            <div className={styles.conteudo}>
            <h1>Nossos Parceiros</h1>
            <p className={styles.exibindo}> {limite} de {nResultados} resultados</p>
            <div className={styles.parceirosGrid}>
                {parceiro.map((parceiro) => <CardParceiros parceiro={parceiro}/>   )}
            </div>
            <Paginacao 
            limit={limite} 
            total={nResultados}
            offset={offset}
            setOffset={setOffset}
             />
            </div>
        </div>
    )
}

export default Parceiros