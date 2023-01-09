import Slider from "./Slider";
import { useState } from "react";
import Container from "../layout/Container";


const slides=[
    "slide1",
    "slide2",
    "slide3",
    "slide4"
]

function Slide(){
    const [idcAtual, setIdcAtual] = useState(0);
    function proximo(){
        let novoIdc;
        if (idcAtual===3){
            novoIdc=0;
        } else {
             novoIdc = idcAtual+1;
        }
        setIdcAtual(novoIdc);
    }
    function anterior(){
        let novoIdc;
        if (idcAtual===0){
            novoIdc=3;
        } else {
             novoIdc = idcAtual-1;
        }
        setIdcAtual(novoIdc);
    }
    return(
        <Container>
            <Slider customClass={slides[idcAtual]} ant={anterior} prx={proximo}/>
        </Container>
    )
}

export default Slide