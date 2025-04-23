//PASTA NODE -> PASTA MODULO OS -> SCRIPT.JS
///importar p modulo os
const os = require("os")

console.log("Sistema Operacional:",os.platform())
console.log("Arquitetura:", os.arch())
console.log("Memórua livre:", os.freemem(),"bytes")
console.log("Memória livres:", os.totalmem(),"bytes")