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
            return res.json("Usuário não existe");
        }

        return res.json(usuarios)
    }
    catch (e){
        console.log(e)
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
