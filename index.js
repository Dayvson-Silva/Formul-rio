function validarInput() {
    // Capturando os elementos de input
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const numberInput = document.getElementById("number");
    const mensagemTextArea = document.getElementById("mensagem")

    // Capturando os elementos de erro
    const nomeErro = document.getElementById("nome-erro");
    const emailErro = document.getElementById("email-erro");
    const numberErro = document.getElementById("number-erro");
    const mensagemErro = document.getElementById("mensagem-erro")

    // Verificando se os campos obrigatórios estão vazios
    let isValid = true;

    if (nomeInput.value === "") {
        nomeInput.style.borderColor = "red";
        nomeErro.innerText = "Campo obrigatório";
        isValid = false;
    } else {
        nomeInput.style.borderColor = "green";
        nomeErro.innerText = "";
    }

    if (emailInput.value === "") {
        emailInput.style.borderColor = "red";
        emailErro.innerText = "Campo obrigatório";
        isValid = false;
    } else {
        emailInput.style.borderColor = "green";
        emailErro.innerText = "";
    }

    if (numberInput.value === "") {
        numberInput.style.borderColor = "red";
        numberErro.innerText = "Campo obrigatório";
        isValid = false;
    } else {
        numberInput.style.borderColor = "green";
        numberErro.innerText = "";
    }

    if(mensagemTextArea.value ==="") {
        mensagemTextArea.style.border = "1px solid red"
        mensagemErro.innerText = "Campo Obrigatório"
        isValid = false;
    } else{
        mensagemTextArea.style.border = " 2px solid green"
        mensagemErro.innerText = "";
    }

    // // Se todos os campos obrigatórios estiverem preenchidos, enviar o formulário
//  if (isValid) {
//      document.getElementById("form").submit();
//      }
}












