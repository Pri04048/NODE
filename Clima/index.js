const express = require("express")
const axios = require("axios")
require("dotenv").config()

const porta = 3000
const app = express()

app.use(express.static("public"))

app.get("/api/clima" , async(requisicao, resposta)=>{
    const cidade = requisicao.query.cidade

    const chaveAPI = process.env.OPENWEATHER_API_KEY 

    try{
        const respostaAPI = await axios.get(`hhttps://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveAPI}&units=metric&lang=pt_br`)
        resposta.json(respostaAPI.data)
    }
    catch{ 
        resposta.status(500).json({erro:"Não foi possivel buscar  o clima"})
       
    }
})
app.listen(porta, () => {
    console.log(`Servidor Rodando em http://localhost:${porta}`)
})
