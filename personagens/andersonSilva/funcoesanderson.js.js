//PRIMEIRA FUNÇÃO ANDERSON SILVA
function anderson1_1() {
	while (pergunta1 != 1 || pergunta1 != 2) {
	  var pergunta1 = prompt("Digite 1 para Boxe ou 2 para Jiu Jitsu");
  
	  if (pergunta1 == 1) {
		window.location.href = "anderson1_2.html";
		break;
	  } else if (pergunta1 == 2) {
		window.location.href = "andersonGameOver1.html";
		break;
	  } else {
		alert("Digite 1 ou 2");
	  }
	}
  }
//SEGUNDA FUNÇÃO ANDERSON SILVA
function anderson1_2() {
	while (pergunta2 != 1 || pergunta2 != 2) {
	  var pergunta2 = prompt("Digite 1 para Bife Acebolado, Arroz e Feijão\n Ou 2 para Comida Japonesa");
  
	  if (pergunta2 == 1) {
		window.location.href = "anderson1_3.html";
		break;
	  } else if (pergunta2 == 2) {
		window.location.href = "andersonGameOver2.html";
		break;
	  } else {
		alert("Digite 1 ou 2");
	  }
	}
  }

  //TERCEIRA FUNÇÃO ANDERSON SILVA
  function anderson1_3() {
	var pergunta3 = 0
	while(pergunta3<=0||1||2||3||4||5){
		var opcao = (prompt("Digite sua resposta com o valor exato"))
		if(opcao == 32154){
			window.location.href = "anderson1_4.html"
			break
		}else if(pergunta3<1){
			alert("Reposta Errada!\nDigite novamente")
		}else{
			window.location.href = "andersonGameOver3.html"
			break
		}
		pergunta3++
	}
	
}
