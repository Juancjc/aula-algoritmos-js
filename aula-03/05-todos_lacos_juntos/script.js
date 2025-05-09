// if/else
function verificarIdade() {
  const idade = parseInt(document.getElementById("idade").value);
  const res = document.getElementById("resultadoIdade");
  if (isNaN(idade)) {
    res.textContent = "Por favor, insira um número válido.";
  } else if (idade >= 18) {
    res.textContent = "Você é maior de idade.";
  } else {
    res.textContent = "Você é menor de idade.";
  }
}

// for
function mostrarNumeros() {
  const lista = document.getElementById("listaNumeros");
  lista.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const item = document.createElement("li");
    item.textContent = "Número: " + i;
    lista.appendChild(item);
  }
}

// switch/case
function verificarDia() {
  const dia = parseInt(document.getElementById("diaSemana").value);
  const msg = document.getElementById("mensagemDia");
  let nomeDia;
  switch (dia) {
    case 1:
      nomeDia = "Domingo";
      break;
    case 2:
      nomeDia = "Segunda-feira";
      break;
    case 3:
      nomeDia = "Terça-feira";
      break;
    case 4:
      nomeDia = "Quarta-feira";
      break;
    case 5:
      nomeDia = "Quinta-feira";
      break;
    case 6:
      nomeDia = "Sexta-feira";
      break;
    case 7:
      nomeDia = "Sábado";
      break;
    default:
      nomeDia = "Número inválido. Digite de 1 a 7.";
  }
  msg.textContent = nomeDia;
}
