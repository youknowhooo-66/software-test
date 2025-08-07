import express from 'express'
import { prismaClient } from '../prisma/prisma.js'

const app = express()
app.use(express.json())

app.use('/', (request, response)=>{
    return response.json("Olá!")
})

app.get('/usuarios', async (req,res) => {
    try{
        const usuarios = await prismaClient.usuario.findMany();
        return res.json(usuarios)
    }
    catch (e){
        console.log(e)
    }
})

app.listen(3000, ()=> console.log("Api rodando"))