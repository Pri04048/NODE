fetch('api/usuario')
    .then(resposta => resposta.json())
    .then(usuario => {
        document.getElementById("nome-usuario").textContent = usuario.displayName
        document.getElementById("email-usuario").textContent = usuario.emails[0].value
    })
    .catch(erro =>{
        console.error("Erro ao buscar dados do usuário", erro)
        window.location.href = '/'
    })