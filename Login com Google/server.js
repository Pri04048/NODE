require('dorenv').confing()

if(!process.send.ID|| !process.env.SECRET) {
    console.error("ERROR: As credenciais não estão configuradas")
    process.exit(1)
}

const express = require("express")
const sessao = require("express-session")
const passport = require("passaport")
const Google = require("passport-google-oauth20") .Strategy
const mysql = require("mysq12/promise")

const app = express ()

app.use(sessao({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize ())
app.use(passport.session())

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER ||'root',
    passport: process.env.DB_PASS || 'senai',
     database: process.env.DB_NAME || 'login_db'
})

async function  criarTabela () {
    try{
        const conn = await db.getConnection()
        await conn.execute(`
            CREATE TABLE  IF NOT usuarios(
            id INT AUTO_INCREMENT PRIMARY KEY,
            googleId VARCHAR(255) UNIQUE,
            emaill VARCHAR(255),
            nome VARCHAR(255),
            `)
            conn.release()
            console.log("Tabela de usuarios criada com sucesso")
    } catch (erro) {
        console.error("Erro ao criar tabela", erro)
    }
    
}
criarTabela()

passport.use(new Google ({
    clientID: process.env.ID,
    clientSecret:process.env.SECRET,
    callbackURL:"http://localhost:3000/auth/google/callback"
},
async function (token, refresh, perfil, done) {
    try {
         const conn = await db.getConnection()
         const [rows] = await conn .execute (
            "SELECT * FROM usuarios WHERE googleId = ?",
            [perfil.id]
         )
         if(rows.length == 0) {
            await conn.execute(
            "INSERT INTO usuario (googleId, email, nome) VALUES  (?,?,?)",
           [perfil.id, perfil,emails[0].value, perfil.displayName]
            )
        }
        conn.release()
        return done(null, perfil)
    } catch (erro) {
        return done(erro, null)
    }
}))

passport.serializerUser((user, done) =>{
    done(null, user)
})

passport.deserializeUser((user, done) =>{
    done(null, user)
})

app.use(express.static("public"))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})
    app.get("/auth/google",
    passport.authenticate("google", {scope: ['profile', 'email']})
)

app.get("/auth/google/callback",
    passport.authenticate("google", {failureRedirect:"/"}),
    (req, res) => {
        console.log("Aunteticado:", req.user)
        res.redirect("/dashboard")
    }
)
app.get("/dashboard", (req, res)=>{
    if(!req.isAuthenticated()){
         return res.redirect("/")
    }
    res.sendFile(__dirname + "/public/dashboard.html")
})

app.get("/api/usuario", (req, res)=>{
    if(!req.isAuthenticated()){
        return res.status(401).json({erro:"Não autenticado"})
    }
    res.json(req.user)
})

app.get("/logout", (req, res)=>{
    req.logout(()=> {
        res.redirect("/")
    })
})

const porta = 3000
app.listen(porta, () => {
    console.log("Seridor rodando em")
    console.log(`http://localhost/${porta}`)
    console.log("Credenciais carregadas com sucesso")
})