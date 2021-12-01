/* ##############################
início verificação de preenchimento de campos do formulario
*/

function verificar(){
var Nome = document.getElementById('Nome').value;
var DtNasc = document.getElementById('DtNasc').value;
var CPF = document.getElementById('CPF').value;
var Fone = document.getElementById('Fone').value;
var Email = document.getElementById('Email').value;
var Senha = document.getElementById('Senha').value;


if (!Nome || !DtNasc || !CPF || !Fone || !Email || !Senha){
	alert("campos não preenchidos, por favor preenche-los");
} else{
	alert("campos preenchidos com sucesso");
}
}

/* final: função de verificação de campos do formulário */
 /*início: Máscara de telefone */
 function maskFone(){
 	var numuroAtual = document.getElementById('Fone').value;
 	const isCelular = numeroAtual.length === 11;
 	const isFone = numeroAtual.length === 10;
 	let numeroAjustado;
 	if (isCelular){
	const part1 = numeroAtual.slice(0,2);
	const part2 = numeroAtual.slice(2,7);
	const part3 =numeroAtual.slice(7,11);
	numeroAjustado = `(${part1}) ${part2}-${part3}`
} else if(isFone){
	const part1 = numeroAtual.slice(0,2);
	const part2 = numeroAtual.slice(2,6);
	const part3 =numeroAtual.slice(6,10);
	numeroAjustado = `(${part1}) ${part2}-${part3}`
}
}