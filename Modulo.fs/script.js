const fs = require("fs")

// fs.writeFileSync("mensagem.xlsx","Oi, criei esse arquivo pelo node")

// console.log("Arquivo criado com sucesso!")

const conteudo = fs.readFileSync("mensagem.txt", "utf-8")
console.log("conteúdo do arquivo:")
console.log(conteudo)