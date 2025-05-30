function criarListaProdutos() {
  var n = document.getElementById("quantosProdutos").value;
  var container = document.getElementById("listaProdutosContainer");
  var html = "";

  for (var i = 1; i <= n; i++) {
    html +=
      '<label class="form-label text-white" for="produto' +
      i +
      '">Produto ' +
      i +
      ":</label><br>" +
      '<input class="form-control mb-1" type="text" id="produto' +
      i +
      '"><br>';
    html +=
      '<label class="form-label text-white" for="preco' +
      i +
      '">Preço:</label><br>';
    html +=
      '<input class="form-control mb-1" type="number" id="preco' + i + '"><br>';
  }

  container.innerHTML = html;
}
function gerarMatriz() {
  var n = document.getElementById("quantosProdutos").value;
  var matriz = [];
  for (var i = 1; i <= n; i++) {
    var produto = document.getElementById("produto" + i).value;
    var preco = document.getElementById("preco" + i).value;
    matriz.push([produto, preco]);
  }
  console.log(matriz);
  mostrarMatriz(matriz);
}

function mostrarMatriz(matriz) {
  var container = document.getElementById("matrizContainer");
  var html = `
  <table class="table table-bordered table-dark text-white text-center">
    <tr>
      <th>Produto</th>
      <th>Preço</th>
    </tr>
  `;
  for (var i = 0; i < matriz.length; i++) {
    html += "<tr>";
    for (var j = 0; j < matriz[i].length; j++) {
      html += "<td>" + matriz[i][j] + "</td>";
    }
    html += "</tr>";
  }
  html += "</table>";
  container.innerHTML = html;
}
// function mostrarMatriz(matriz) {
//   var container = document.getElementById("matrizContainer");
//   var html = `
//   <table class="table table-bordered table-dark text-white text-center">
//     <tr>
//       <th>Produto</th>
//       <th>Preço</th>
//     </tr>
//   `;
//   for (var i = 0; i < matriz.length; i++) {
//     html += "<tr>";
//     let preco = (matriz[i][1] * 1.2).toFixed(2);
//     let produto = matriz[i][0];
//     html += "<td>" + produto + "</td>";
//     html += "<td>" + preco + "</td>";
//     html += "</tr>";
//   }
//   html += "</table>";
//   container.innerHTML = html;
// }
