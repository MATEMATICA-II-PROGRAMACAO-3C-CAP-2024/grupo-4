document.querySelector(".parametro-senha__botao");
const numeroSenha = document.querySelector(".parametro-senha__texto") 
let tamanhoSenha = 12;
senha.textContent = tamanhoSenha;
numeroSenha.textContent = 5;
const botoes = document.querySelector(".parametro-senha__botao");
botoes[0].onclick = diminuiTamanho;
console.log(botoes);
function diminuiTamanho(){
    if (tamanhoSenha > 1)
 tamanhoSenha = tamanhoSenha - 1;
 numeroSenha.textContent = tamanhoSenha
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
    tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
    }
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

// código omitido
const campoSenha = document.querySelector("#campo-senha");
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
function geraSenha(){
    for (let i = 0; i < tamanhoSenha;i++)
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
       console.log(letrasMaiusculas[numeroAleatorio]);
}
campoSenha.value= letrasMaiusculas;