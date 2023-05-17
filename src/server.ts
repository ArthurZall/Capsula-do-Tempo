
import fastify from "fastify"; //importação do framework
const app = fastify();

//ROTAS

app.get("/",()=>{
    return "Hello World!"
});



//SERVIDOR

app.listen({
    port: 3333,     
}).then(()=> {
    console.log('Servidor rodando no endereço http://localhost:3333');
});