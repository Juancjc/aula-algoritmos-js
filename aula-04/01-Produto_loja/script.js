let produtos = ["Arroz", "Feijão", "Iogurte", "Iogurte", "Suco", "Pão"];

function atualizarLista() {
  const lista = document.getElementById("listaProdutos");
  lista.innerHTML = "";
  produtos.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `${index}: ${item}`;
    lista.appendChild(li);
  });
}

function adicionarFinal() {
  const nome = document.getElementById("produto").value.trim();
  if (nome) produtos.push(nome);
  atualizarLista();
}

function adicionarInicio() {
  const nome = document.getElementById("produto").value.trim();
  if (nome) produtos.unshift(nome);
  atualizarLista();
}

function removerFinal() {
  produtos.pop();
  atualizarLista();
}

function removerInicio() {
  produtos.shift();
  atualizarLista();
}

function removerPorPosicao() {
  const pos = parseInt(document.getElementById("posicao").value);
  if (!isNaN(pos) && pos >= 0 && pos < produtos.length) {
    produtos.splice(pos, 1);
    atualizarLista();
  }
}

// Inicializa lista ao carregar
atualizarLista();
