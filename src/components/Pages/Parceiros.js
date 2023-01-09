import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Parceiros.module.css"
import CardParceiros from "../ConteudoPagParceiros/CardParceiros";
import Container from "../layout/Container";


function Parceiros(){
    const [parceiro, setParceiro] = useState([]);
    
    useEffect (() =>{
        fetch("http://localhost:5000/parceiros",{
        method: "GET",
        headers:{
            'Content-Type': 'aplication/json'
        }
    }).then((resp) => resp.json())
    .then((data)=>{
        setParceiro(data)
    })
    .catch((err) => console.log(err))

    },[])
        const nResultados = parceiro.length;
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
            <p className={styles.exibindo}> 6 de {nResultados} resultados</p>
            <div className={styles.parceirosGrid}>
                {parceiro.map((parceiro) => <CardParceiros parceiro={parceiro}/>   )}
            </div>
            </div>
        </div>
    )
}

export default Parceiros