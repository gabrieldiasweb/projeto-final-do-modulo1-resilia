//FUNÇÃO DWAYNE 1 
function dwayne1_1() {
	while (pergunta1 != 1 || pergunta1 != 2) {
	  var pergunta1 = prompt("Digite \n 1 Para ele ir com tudo ou \n 2 Para ele ir com calma");
  
	  if (pergunta1 == 1) {
		window.location.href = "dwayne2_2.html";
		break;
	  } else if (pergunta1 == 2) {
		window.location.href = "gameOverDwayne1.html";
		break;
	  } else {
		alert("Digite 1 ou 2");
	  }
	}
  }
  //FUNÇÃO DWAYNE 2
  function dwayne2_2() {
	while (pergunta1 != 1 || pergunta1 != 2) {
	  var pergunta1 = prompt("Digite \n 1 Para ele não jogar pro chão \n 2 Para ele jogar pro chão");
  
	  if (pergunta1 == 1) {
		window.location.href = "gameOverDwayne2.html";
		break;
	  } else if (pergunta1 == 2) {
		window.location.href = "dwayne3_3.html";
		break;
	  } else {
		alert("Digite 1 ou 2");
	  }
	}
  }
  //FUNÇÃO DWAYNE 3
  function dwayne3_3() {
	while (pergunta1 != 1 || pergunta1 != 2) {
	  var pergunta1 = prompt("Digite \n 1 Para ele não jogar pro chão \n 2 Para ele jogar pro chão");
  
	  if (pergunta1 == 1) {
		window.location.href = "dwayne4_4.html";
		break;
	  } else if (pergunta1 == 2) {
		window.location.href = "gameOverDwayne3.html";
		break;
	  } else {
		alert("Digite 1 ou 2");
	  }
	}
  }