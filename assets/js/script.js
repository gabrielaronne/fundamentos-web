
/* 
case sensitive = reconhece letras maiusculas e minusculas
acesso por tag -
getElementByTagName()
acesso por id-
getElementById()
por nome-
getElementsByName()
por classe-
getElementsByClassName()
por seletor-
querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "nome invalido"
        txtNome.style.color = 'red'
    }
    else {
        txt.innerHTML = "nome valido"
        txtNome.style.color = 'green'
    }


}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@')==-1 || email.value.indexOf('.')== -1){
        txtEmail.innerHTML="email invalido"
        txtEmail.style.color = 'red'
           
    }
    else{ 
        txtEmail.innerHTML="email valido"
        txtEmail.style.color = 'green'

    }

    

}