function calcularMedia() {
  // cria referência aos elementos da página
  var inNome = document.getElementById("inNome");
  var inNota1 = document.getElementById("inNota1");
  var inNota2 = document.getElementById("inNota2");
  var outMedia = document.getElementById("outMedia");
  var outSituacao = document.getElementById("outSituacao");

  // obtém os conteúdos dos campos
  var nome = inNome.value;
  var nota1 = Number(inNota1.value);
  var nota2 = Number(inNota2.value);

  // valida se os campos foram preenchidos corretamente
  if (nome === "" || isNaN(nota1) || isNaN(nota2)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // calcula a média das notas
  var media = (nota1 + nota2) / 2;

  // exibe a média com uma casa decimal
  outMedia.textContent = "Média das Notas: " + media.toFixed(1);

  // determina e exibe a situação do aluno
  if (media >= 7) {
    outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)";
    outSituacao.style.color = "blue";
  } else if (media >= 4) {
    outSituacao.textContent = "Atenção " + nome + ". Você está em exame";
    outSituacao.style.color = "green";
  } else {
    outSituacao.textContent = "Ops " + nome + "... Você foi reprovado(a)";
    outSituacao.style.color = "red";
  }
}

// cria referência ao botão e associa o evento de clique
var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularMedia);
