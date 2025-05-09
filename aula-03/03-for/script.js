function mostrarNumeros() {
  const lista = document.getElementById("lista");
  lista.innerHTML = ""; // limpa lista anterior

  for (let i = 1; i <= 10; i++) {
    const item = document.createElement("li");
    item.textContent = "Número: " + i;
    lista.appendChild(item);
  }
}
