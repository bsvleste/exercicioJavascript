<script>
	
	var data = new Date(2018,0,01);
	console.log(data);

	var agora = new Date();
	console.log("data atual :" , agora );

	var dataDecorrida = agora - data;
	console.log("intervalo entre duas datas, ", dataDecorrida);
	console.log("Ano" , agora.getFullYear());
	console.log("Mes" , agora.getMonth() + 1);
	console.log("Dia" , agora.getDate());
	console.log("Dia de 0 a 5 , 0 = Domingo , 1 - segunda...etc" , agora.getDay());
	console.log("Horas" , agora.getHours());
	console.log("Horas em utc depende do fuso horaio" , agora.getUTCHours());
	console.log("" , agora.toString());
	console.log("" , agora.toUTCString());
	console.log("Data local" , agora.toLocaleDateString());
	console.log("Hora local" , agora.toLocaleTimeString());
	console.log("Soemnte es5" , agora.toISOString());
	


</script>