//PRIMEIRA FUNÇÃO JON
function jon1_1() {
	while (pergunta1 != 1 || pergunta1 != 2) {
	  var pergunta1 = prompt("Digite \n 1 para Masculação ou \n 2 Para Treinamento Funcional");
  
	  if (pergunta1 == 1) {
		window.location.href = "gameOverJon1.html";
		break;
	  } else if (pergunta1 == 2) {
		window.location.href = "jon2_2.html";
		break;
	  } else {
		alert("Digite 1 ou 2");
	  }
	}
  }
//SEGUNDA FUNÇÃO JON 
function jon1_2() {
	while (pergunta1 != 1 || pergunta1 != 2) {
	  var pergunta1 = prompt("Digite 1 para Fica Treinando na Academia \n 2 Para Vai curtir a baladinha Marota");
  
	  if (pergunta1 == 1) {
		window.location.href = "gameOverJon1.html";
		break;
	  } else if (pergunta1 == 2) {
		window.location.href = "jon2_2.html";
		break;
	  } else {
		alert("Digite 1 ou 2");
	  }
	}
  }