function dwayne1_1() {
	while (pergunta1 != 1 || pergunta1 != 2) {
	  var pergunta1 = prompt("Digite \n 1 Para ele ir com tudo ou \n 2 Para ele ir com calma");
  
	  if (pergunta1 == 1) {
		window.location.href = "dwayne1_2.html";
		break;
	  } else if (pergunta1 == 2) {
		window.location.href = "gameOverDwayne.html";
		break;
	  } else {
		alert("Digite 1 ou 2");
	  }
	}
  }