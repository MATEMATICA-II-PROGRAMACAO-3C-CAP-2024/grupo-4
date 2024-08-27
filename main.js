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
 numeroSenha.textContent = tamanhoSenha;
 geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
    tamanhoSenha = tamanhoSenha + 1;
    geraSenha();
    }
    numeroSenha.textContent = tamanhoSenha;
    }
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

// código omitido
const campoSenha = document.querySelector("#campo-senha");
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVXYWZ";
const numeros = "0123456789";
const simbolos = "!@%*?";
const botoes = document.querySelectorAll(".parametro-senha__botao");    
const campoSenha = document.querySelector("campo-senha");
const checkbox = document.querySelectorAll(".checkbox");
{
function geraSenha()
    let senha = " ";
    for (let i = 0; i < tamanhoSenha;i++)
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
       console.log(letrasMaiusculas[numeroAleatorio]);
       let alfabeto = "";
       campoSenha.value= senha;
        if (checkbox[0].checked){
       alfabeto = alfabeto + letrasMaiusculas;
      }
      if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
        }
        if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
        }
        if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
        }
         console.log(alfabeto);
         let senha = "";
         for (let i = 0; i < tamanhoSenha;i++)
         let numeroAleatorio = Math.random()*alfabeto.length;
         numeroAleatorio = Math.floor(numeroAleatorio);
         senha = senha + alfabeto[numeroAleatorio];
     const checkbox = document.querySelectorAll(".checkbox");
     for (i=0; i < checkbox.length;i++){
        checkbox[i].onclick = geraSenha;
    console.log(checkbox[0].checked); }
    const forcaSenha = document.querySelector('.forca');
    function classificaSenha(){
    forcaSenha.classList.add("forte")
    }
}