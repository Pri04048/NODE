const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let resolvidos = {
    grampeador: false,
    papeis: false,
    almofada: false,
    livro: false,
    janela: false,
    armario: false
}

function menuPrincipal() {
    console.log("\n🔒 Você está em uma sala trancada.")
    console.log("Ao seu redor, você vê:")
    console.log("1. 📎 Um grampeador velho")
    console.log("2. 📄 Um monte de papéis amassados na mesa")
    console.log("3. 🛋️ Uma almofada fora do lugar")
    console.log("4. 📚 Um livro misterioso sobre a mesa")
    console.log("5. 🪟 Uma janela trincada")
    console.log("6. 🚪 Um armário trancado")
    console.log("7. 🚪 Tentar abrir a porta")

    rl.question("\n🤔 O que você deseja investigar? ", (resposta) => {
        switch (resposta.trim()) {
            case "1":
                investigarGrampeador()
                break
            case "2":
                investigarPapeis()
                break
            case "3":
                investigarAlmofada()
                break
            case "4":
                investigarLivro()
                break
            case "5":
                investigarJanela()
                break
            case "6":
                investigarArmario()
                break
            case "7":
                verificarSaida()
                break
            default:
                console.log("❌ Escolha inválida.")
                menuPrincipal()
        }
    })
}

function investigarGrampeador() {
    if (resolvidos.grampeador) {
        console.log("✅ Você já resolveu esse desafio.")
        return menuPrincipal()
    }

    rl.question("\n📎 Dentro do grampeador tem um bilhete: 'Sou cheio de buracos, mas seguro a água. O que sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "esponja") {
            console.log("🎉 Acertou! Você desbloqueou a chave que estava no grampeador.")
            resolvidos.grampeador = true
        } else {
            console.log("❌ Resposta errada!")
        }
        menuPrincipal()
    })
}

function investigarPapeis() {
    if (resolvidos.papeis) {
        console.log("✅ Você já resolveu esse desafio.")
        return menuPrincipal()
    }

    rl.question("\n📄 Um dos papéis diz: 'Qual palavra está sempre escrita errada no dicionário?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "errada") {
            console.log("🎉 Acertou! Você encontrou a chave no meio dos papéis.")
            resolvidos.papeis = true
        } else {
            console.log("❌ Errou! Não é isso.")
        }
        menuPrincipal()
    })
}

function investigarAlmofada() {
    if (resolvidos.almofada) {
        console.log("✅ Você já resolveu esse desafio.")
        return menuPrincipal()
    }

    rl.question("\n🛋️ Na almofada, tem um enigma: 'O que pode encher uma sala sem ocupar espaço?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "luz") {
            console.log("💡 Você acertou! A chave estava costurada na almofada.")
            resolvidos.almofada = true
        } else {
            console.log("❌ Não é isso, tente novamente depois.")
        }
        menuPrincipal()
    })
}

function investigarLivro() {
    if (resolvidos.livro) {
        console.log("✅ Você já resolveu esse desafio.")
        return menuPrincipal()
    }

    rl.question("\n📚 O livro está preso por um cadeado. Um papel diz: 'Tenho páginas mas não sou para ler, conto horas sem escrever. O que sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "relógio" || resposta.trim().toLowerCase() === "relogio") {
            console.log("⏰ Acertou! A chave estava dentro do livro.")
            resolvidos.livro = true
        } else {
            console.log("❌ Errado! O enigma permanece.")
        }
        menuPrincipal()
    })
}

function investigarJanela() {
    if (resolvidos.janela) {
        console.log("✅ Você já resolveu esse desafio.")
        return menuPrincipal()
    }

    rl.question("\n🪟 Há um papel colado na janela: 'Quanto mais você tira, maior eu fico. O que sou?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "buraco") {
            console.log("🕳️ Correto! Você encontrou uma chave escondida na rachadura da janela.")
            resolvidos.janela = true
        } else {
            console.log("❌ Errado! Não desista.")
        }
        menuPrincipal()
    })
}

function investigarArmario() {
    if (resolvidos.armario) {
        console.log("✅ Você já resolveu esse desafio.")
        return menuPrincipal()
    }

    rl.question("\n🚪 Um papel está preso na maçaneta: 'O que tem dentes mas não morde?' ", (resposta) => {
        if (resposta.trim().toLowerCase() === "pente") {
            console.log("🗝️ Muito bem! A chave estava dentro do armário.")
            resolvidos.armario = true
        } else {
            console.log("❌ Ainda não é isso.")
        }
        menuPrincipal()
    })
}

function verificarSaida() {
    if (resolvidos.grampeador && resolvidos.almofada && resolvidos.papeis &&
        resolvidos.livro && resolvidos.janela && resolvidos.armario) {
        console.log("🎉 Você encontrou todas as 6 chaves!")
        console.log("🚪 A porta se abre lentamente... Parabéns, você escapou! 🏃‍♂️💨")
        rl.close()
    } else {
        console.log("🚫 A porta ainda está trancada. Resolva todos os enigmas antes de sair.")
        menuPrincipal()
    }
}

console.log("🔐 Bem-vindo ao Escape Room com Emojis!")
menuPrincipal()
