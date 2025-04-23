

//Vamos criar um exemplo que simula burcar dados de um usuario em um banci de dados , a busca vai levra 2 segundos 
function buscarUsuario(id){
    return new Promise((resolve , reject) =>{
        //Iniciamos uma nova promise que pode ter dois resultados:
        //resolva, quando tem sucesso
        // reject, quando da erro
        console.log(`Buscando usuário com ID>${id}`)
        setTimeout(() => {
            const usuario = {id: id, nome :"João"}

            if(usuario) {
                resolve(usuario)
            } else{
                reject("Usuário não encontrado")
            }
          
        } ,2000)
    })

}

buscarUsuario(1)
.then((usuario) => {//acontece quando a promise é aprovada
    console.log("Usuario encontrado")
})
.catch((erro) => {})