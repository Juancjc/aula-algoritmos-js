function verificarIdade() {
  const idade = parseInt(document.getElementById("idade").value);
  let msg = "";

  if (idade >= 18) {
    msg = "Você é maior de idade.";
  } else {
    msg = "Você é menor de idade.";
  }

  document.getElementById("resultado").textContent = msg;
}
