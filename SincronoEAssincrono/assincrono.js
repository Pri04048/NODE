function tarefaDemorada (nome, tempo){
    setTimeout(() => {
        console.log(`Tarefa ${nome} concluida`)
    },tempo)
}

console.log("iniando o programa")
console.log("Executando a terefa 1")
tarefaDemorada(1,300) // Tarefa 1 vai demorar 3 segundos,mas não vai travar o código


console.log("Executando a tarefa 2")
tarefaDemorada(2, 300)// Tarefa 2 também vai demorar 3 segundos e vai iniciar logo depois da primeira

console.log("Programa Finalizado(mas as tarefas ainda estão acontecendo")
