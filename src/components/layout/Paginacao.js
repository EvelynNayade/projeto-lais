import "./Paginacao.css"

const maxItens = 7;
const maxLeft = (maxItens-1)/2;


function Paginacao ({limit, total, offset, setOffset}){
    const atual = offset;
    const pages = Math.ceil(total/limit);
    const maxFirst = Math.max(pages - (maxItens - 1), 1);
    const primeria = Math.min(
        Math.max(atual-maxLeft,1),
        maxFirst);
    let ativo;
    return (
        <ul className={"pagination"}>
                <li>
                <button className="Ant" onClick={() => setOffset(atual-1)} disabled={atual==1}>
                    Anterior
                </button>
                </li>
            {Array.from({length:Math.min(maxItens,pages)}).map((_,index) => index + primeria)
            .map((page) => (
                <li key={page}>
                <button className={page==atual?"nAtivo":"number"} onClick={() => setOffset(page)}>
                        {page}
                    </button>
                    </li>
            ))}
            <li>
            <button className="Prox" onClick={() => setOffset(atual+1)} disabled ={atual===pages}>
                Próxima
            </button>
            </li>
        </ul>
    )
}

export default Paginacao