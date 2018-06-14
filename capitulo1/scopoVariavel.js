<script>
	var scope = "global";
	function checkGlobal()
	{
		var scope= "local";
		return scope;
	}
	
	console.log(scope,checkGlobal());

	scope = "global";
	function checkGlobal2()
	{
		scope = "local";
		myScope = "local";
		return [scope, myScope];
	}
	console.log(checkGlobal2());
	console.log(scope);

	var quadrado = function(x){return x*x;}

	console.log("Quadrado de 6 eh ", quadrado(6));
</script>