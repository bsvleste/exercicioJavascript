/*range é uma classe representando um intervalo de valores
	Esta é uma função fabrica que retorna um objeto range
*/
function range(from, to)
{
	/*usa a função inherit() para criar um objeto qu eherda do
	objeto prototipo definido a seguir.O objeto prototipo é armazenado
	como uma propriedade dessa funçao e define os metodos compatilhados
	(Comportamento)
	de todos os objetos range*/
	var r = inherit(range.methods);

	//armazena os pontos iniciais e final (estado) desse novo objeto range
	//Essa propriedades nao herdadas exlcusivas desse objeto
	r.from = from;
	r.to = to;
	//finalmente retorna o novo objeto
	return r; 
}
//este objeto prototipo define metodos herdados por todos os objetos range
	range.methods = {
		//retorna true se x esta no intervalo caso contraio , false
		//este metodo funciona para intervalos textuais e Date como para numericos.
		includes: function(x){
			if(this.from <= x && x <= this.to)
				return "incluido";
			 },
		//chama f uma vex para cada inteiro no intervalo
		//este metodo so funciona para intervalos numericos
		foreach:function(f){
			for(var x = Math.ceil(this.from);x<= this.to; x++) f(x);
		},
		//retorna uma representacao de string do intervalo
		toString:function(){return "("+this.from + "..." + this.to + ")";}
	};

	//exemplos de um objeto range
	var r = range(1,6); //cria um objeto range
	console.log(r.includes(4);	//=>verdadeiro 2 esta no intervalo
	r.foreach(console.log);	//imprime 1,2,3
	console.log(r.toString());	//imprime (1....3)