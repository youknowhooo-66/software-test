import { useState, useEffect } from "react";
import { getProdutos } from "../services/produto.js"

const Produtos = () => {
const [produto, setProduto] = useState([]);

const carregaProduto = async () => {
    try {
    const lista = await getProdutos();
    setProduto(lista.data);
    } catch (e) {
        console.log("Deu erro!!")
    }
}
useEffect(() => {
    carregaProduto();
}, [])

    return(
        <div>
        <h1>Gerencie seus produtos :D</h1>

        <button className="btn btn-danger">Adicionar</button>
        <table>
            <thead>
                <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Ações</th>
                </tr>
            </thead>

        <tbody>
            {
                produto.map((p) => {
                    <tr key={p.id}>
                        <td>{p.nome}</td>
                        <td>{p.descricao}</td>
                        <td>{p.valor}</td>
                    </tr>
                })
            }
        </tbody>
        </table>
        </div>
    )
}
export default Produtos;