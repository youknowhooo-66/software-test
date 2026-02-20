import db from "../config/db.js"

const getProdutos = async (req, res) => {
    try {

        const [rows] = await db.query("SELECT id, nome, descricao, valor FROM produtos WHERE ativo = 1");
        
        if(rows.length === 0)
            return res.status(404).json({message: "Produtos não encontrado"})

        return res.status(200).json({message: "Produtos encontrados com sucesso!!", data: rows})

    } catch(e) {
        return res.status(400).json({message: "Erro ao buscar os produtos"})
    }
}

export {getProdutos};