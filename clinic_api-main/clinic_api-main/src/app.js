import express from 'express'
import { prismaClient } from '../prisma/prisma.js'

const app = express()
app.use(express.json())

// app.use('/', (request, response)=>{
//     return response.json("Olá!")
// })

app.get('/usuarios', async (req,res) => {
    try{
        const usuarios = await prismaClient.usuario.findMany();
        return res.json(usuarios)
    }
    catch (e){
        console.log(e)
    }
});

app.get("/usuarios/:id", async(req,res) => {
    try{
        const usuarios = await prismaClient.usuario.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })

        if(usuarios == null){
            return res.status(404).send("Usuário não existe");
        }

        return res.json(usuarios)
    }
    catch (e){
        console.log(e)
    }
})

app.get('/paciente', async (req,res) => {
    try{
        const pacientes = await prismaClient.paciente.findMany();
        return res.json(pacientes)
    }
    catch (e){
        console.log(e)
    }
});

app.get("/paciente/:id", async(req,res) => {
    const { params } = req
    try{
        const pacientes = await prismaClient.paciente.findUnique({
            where: {
                id: Number(req.Number(params.id))
            }
        })

        if(pacientes == null){
            return res.status(404).send("Paciente não existe");
        }

        return res.json(pacientes)
    }
    catch (e){
        console.log(e)
    }
})

app.get('/exame', async (req,res) => {
    try{
        const exames = await prismaClient.exame.findMany();
        return res.json(exames)
    }
    catch (e){
        console.log(e)
    }
});

app.post('/paciente', async (req,res) => {
    try{
    const dataFormatadaISO = toISOString();
    const { body } = req
    const pacientes = await prismaClient.paciente.create({
        data: {
            nome:           body.nome,
            cpf:            body.cpf,
            telefone:       body.telefone,
            email:          body.email,
            data_nascimento: dataFormatadaISO,
            sexo:           body.sexo,
            responsavel:    body.responsavel,
        },
    })
    return res.status(201).json(pacientes)
}
catch (e){
    console.log(e)
}
});

app.post('/exame', async (req,res) => {
        try{
        const { body } = req
        const exames = await prismaClient.exame.create({
            data: {
                tipo_exame:   body.tipo_exame,
                resultado:    body.resultado,
                data_exame:   body.data_exame,
                link_arquivo: body.link_arquivo,
                observacoes:  body.observacoes,
                paciente_id:  body.paciente_id,
            },
        })
        return res.status(201).json(exames)
    }
    catch (e){
        console.log(e)
    }
});

app.post("/usuarios", async(req, res)=> {
  try {
    const { body } = req
    const usuario = await prismaClient.usuario.create({
      data: {
        nome: body.nome,
        cargo: body.cargo,
        email: body.email,
        senha: body.senha
      },
    })
    return res.status(201).json(usuario)
  } catch (error) {
    console.error(error)
    if(error.code === "P2002"){
      res.status(404).send("Falha ao cadastrar usuário: Email já cadastrado!")
    }
  }
})

app.put("/usuarios/:id", async(req,res)=>{
    try {
        const { body, params } = req

        if(body.nome || body.cargo || body.email || body.senha){
            await prismaClient.usuario.update({
                where: {id: Number(params.id)},
                data: {
                    ...body
                },
            })
            const usuarioAtualizado = await prismaClient.usuario.findUnique({
                where: {
                    id: Number(params.id)
                }
            })
    
            res.status(201).json({
                message: "Usuário atualizado!",
                data: usuarioAtualizado
            })
        } else {
            res.status(404).send("Atributos inválidos não condizem com o schema")
        }



    } catch(error) {
        if(error.code === "P2025"){
            res.status(404).send("Nenhum usuário foi encontrado para uma atualização: Tem certeza que o ID está certo?")
        }
        if(error.code === "P2002"){
            res.status(404).send("Esse email já foi registrado: Tente novamente!")
        }

        console.log(error)
    }
})

app.delete("/usuarios/:id", async(req,res)=>{
    const {params} = req
    try{
        const usuarioDeletado = await prismaClient.usuario.delete({
            where: {
                id: Number(params.id),
            }
        })
        res.status(200).json({
            message: "Usuário Deletado!",
            data: usuarioDeletado
    })
    }catch(error){
        if(error.code === "P2025"){
            res.status(404).send("Não existe um usuário com esse id. Verifique e tente novamente!")
        }
    }
})

app.listen(3000, ()=> console.log("Api rodando"))
// export function fmsdv(ms){
// return new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve(`fsdmva${ms}ewf`)
//         reject(new Error('falha'));  }, ms); });
// }
// fmsdv(2000)
// .then((fdsf) => console.log(fdsf))
// .catch((fdsf) => console.log(fdsf))
// .finally((fdsf) => console.log('finalizado'))
