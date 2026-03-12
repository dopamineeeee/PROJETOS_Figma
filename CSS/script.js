const form = document.getElementById("loginForm")

form.addEventListener("submit", function(event){

event.preventDefault()

const email = document.getElementById("email").value
const senha = document.getElementById("senha").value

const emailCorreto = "admin@email.com"
const senhaCorreta = "123456"

const mensagem = document.getElementById("mensagem")

if(email === emailCorreto && senha === senhaCorreta){

mensagem.innerText = "Login realizado com sucesso!"
mensagem.style.color = "green"

window.location.href = "orcamento.html";

}else{

mensagem.innerText = "Email ou senha incorretos"
mensagem.style.color = "red"

}

})

function irParaBusca(){

const data = document.getElementById("dataOrcamento").value

window.location.href = "buscar-cep.html?data=" + data

}

const parametros = new URLSearchParams(window.location.search)

const data = parametros.get("data")

document.getElementById("dataRecebida").innerText = data