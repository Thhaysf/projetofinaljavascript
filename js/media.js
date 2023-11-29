/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes 
  frases usando uma estrutura de condição:*/

function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  let mensagem = "";

  // evite mexer no código acima!

  //calculando a média.
  let media = (nota1 + nota2 + nota3 + nota4) / 4;

  // 1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
  if (media == 0) {
    mensagem = "Infelizmente você zerou a prova :( ";
  }
  //2. Se a nota for entre 0.1 e 3, mostre na tela: "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
  else if (media >= 0.1 && media <= 3) {
    mensagem = "Caramba, deu ruim, você obteve a média abaixo do esperado!Estude mais e tente novamente!";
  }
  //3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
  else if (media >= 3.1 && media <= 5.9) {
    mensagem = "Você está evoluindo! Falta pouco para a média.";
  }

  //4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
  else if (media >= 6 && media <= 7) {
    mensagem = "Você está na média.";
  }

  //5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
  else if (media >= 7.1 && media <= 9.9) {
    mensagem = "Notão, parabéns!";
  }

  //6. Se a nota for entre 10, mostre na tela: "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
  else if (media >= 10) {
    mensagem = "Hoje é seu aniversário? Por que você ta de parabéns!";
  }

  // evite mexer na linha de código abaixo!
  document.getElementById("situacaoAluno").innerHTML = "A sua média é: " + media + "<br>" + mensagem;
}
