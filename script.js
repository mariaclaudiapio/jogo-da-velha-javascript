var proximoJogador = "O";
var vencedor = "";
var tbody = document.querySelector("tbody");

function fazJogada(i, j) {
  var tr = tbody.children[i];
  var td = tr.children[j];
  var jogadaPermitida = !td.textContent && !vencedor;

  if (jogadaPermitida) {
    td.textContent = proximoJogador;
    if (jogadorVenceu(proximoJogador)) {
      vencedor = proximoJogador;
    } else {
      proximoJogador = proximoJogador === "O" ? "X" : "O";
    }
  }
}

function reinicia() {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var td = tbody.children[i].children[j];
      td.textContent = "";
    }
  }
  proximoJogador = "O";
}

function jogadorVenceu(jogador) {
  return false;
}

// retornar a aula de 01:10
