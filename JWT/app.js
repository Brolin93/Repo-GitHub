
const express = require('express')
const app = express()


app.use(express.json())

app.get('/', (req, res)=>{
    res.end('Home Page')
})


app.listen('5000',()=>{
    try {
        console.log('Servidor corriendo en el puerto 5000');
    } catch (error) {
        console.log(error);
    }
});