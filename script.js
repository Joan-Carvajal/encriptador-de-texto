const matrizCodigo = [
	['e', 'enter'],
	['i', 'imes'],
	['a', 'ai'],
	['o', 'ober'],
	['u', 'ufat']
];

const textArea = document.querySelector(".text-area");
const resultado = document.querySelector(".mensaje");

// Encriptar
function encriptar(palabraEncriptada) {
	
	palabraEncriptada = palabraEncriptada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (palabraEncriptada.includes(matrizCodigo[i][0])) {
			palabraEncriptada = palabraEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}
	return palabraEncriptada;
}
function handleEncriptar() {
	resultado.value=  encriptar(textArea.value);
	limpiarCampos(1);

}
//Desencriptar
function desencriptar(palabraDesencriptada) {
	palabraDesencriptada = palabraDesencriptada.toLowerCase();

	for (let i = 0; i < matrizCodigo.length; i++) {
		if (palabraDesencriptada.includes(matrizCodigo[i][1])) {
			palabraDesencriptada = palabraDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
		}
	}
	return palabraDesencriptada;
}


function handleDesencriptar() {
	resultado.value=  desencriptar(textArea.value);
	limpiarCampos(0);
}
// lipiar campos 
function limpiarCampos(n) {
	textArea.value = "";
	 n ===1 ? resultado.style.backgroundImage = "none":"";
}

// Copiar texto
 function copiar() {
  resultado.select();
  resultado.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(resultado.value);
  alert("Texto copiado");
}