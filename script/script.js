function validar(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let tel = document.getElementById("tel").value

    if(nome =="" && email =="" && tel ==""){
        alert("PREENCHA TODOS OS CAMPOS")
    }else{
        alert("ENVIADO")
    }
}