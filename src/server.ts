
import fastify from "fastify"; //importação do framework
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

//ROTAS

app.get("/users", async ()=>{
    const users = await prisma.user.findMany
    return users
});



//SERVIDOR

app.listen({
    port: 3333,     
}).then(()=> {
    console.log('Servidor rodando no endereço http://localhost:3333');
});