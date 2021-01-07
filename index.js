$(document).ready(function () {
  $('#staticBackdrop').modal('show');

  // $('#resultGame').modal('show');

  $('#button_start_game').click(function () {
    capturaDadosJogadores();
  });

  $("td").click(function () {
    if ($(this).html() == "") {
      preencheColunaJogoDaVelha(this);
    }
  });

  $("#button_player_one_win").click(function () {
    adicionaValorAoRanking("one");
  })

  $("#button_player_two_win").click(function () {
    adicionaValorAoRanking("two");
  })

  $("#button_player_nobody_win").click(function () {
    adicionaValorAoRanking("nobody");
  })

  $('#resultGame').on('show.bs.modal', function (event) {
    numeroRodadas = 0;
  })
});



function capturaDadosJogadores() {
  var playerOne = $('input[name="input_player_one"]').val();
  var playerTwo = $('input[name="input_player_two"]').val();

  var startGame = true;

  if (playerOne == "") {
    alert('Preencha o campo do Jogador 1!');
    startGame = false;
  }

  if (playerTwo == "") {
    alert('Preencha o campo do Jogador 2!');
    startGame = false;
  }

  if (startGame = true) {
    $('#staticBackdrop').modal('hide');
    preencheNomeJogadores();
    $('#game').show('slow');
  }
}



function preencheNomeJogadores() {
  var playerOne = $('input[name="input_player_one"]').val();
  var playerTwo = $('input[name="input_player_two"]').val();

  $("#span_player_one, #button_player_one_win").html(playerOne);
  $("#span_player_two, #button_player_two_win").html(playerTwo);
}



var ultimaJogada = "";
var numeroRodadas = 0;
function preencheColunaJogoDaVelha(coluna) {
  var jogadaAtual;

  if (ultimaJogada == "") {
    jogadaAtual = "X";
  }

  if (ultimaJogada == "O") {
    jogadaAtual = "X";
  }

  if (ultimaJogada == "X") {
    jogadaAtual = "O";
  }

  ultimaJogada = jogadaAtual;

  $(coluna).html(jogadaAtual);

  numeroRodadas = numeroRodadas + 1;

  if (numeroRodadas == 9) {
    $('#resultGame').modal('show');
    numeroRodadas = 0;
  }
}



var scorePlayerOne = 0;
var scorePlayerTwo = 0;
function adicionaValorAoRanking(vencedor) {
  if (vencedor == "one") {
    scorePlayerOne = scorePlayerOne + 1;
  }

  if (vencedor == "two") {
    scorePlayerTwo = scorePlayerTwo + 1;
  }

  $("#span_player_one_score").html(scorePlayerOne);
  $("#span_player_two_score").html(scorePlayerTwo);

  $('#resultGame').modal('hide');

  $("td").html("");
}
