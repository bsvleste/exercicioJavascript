<script>
	var  texto = "Hello, word";
	console.log("variavel de string" ,texto);
	console.log("1° caracters da string" ,texto.charAt(0));
	console.log("ultimo caracters da string" ,texto.charAt(texto.length -1));
	console.log(texto.substring(1,4));
	console.log(texto.slice(-3));
	console.log(texto.indexOf("l"));
	console.log(texto.lastIndexOf("l"));
	console.log(texto.indexOf("l",3));
	console.log(texto.split(","));
	console.log(texto.replace(",", " ."));
	console.log(texto.toUpperCase());

</script>