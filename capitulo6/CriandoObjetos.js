console.log("objetos literais");
var teste = ['1','2'];  
var vazio = {};//objeto sem propriedades

var point = {x:0,y:0};// objeto com duas propriedades
var point2 = {x:point.x,y:point.y+1};// objeto com valores mais comlplexos
var livro = 
	{
		"titulo":"Javascript", 				//os nomes de propriedades incluem espços
		"subTitle":"O Guia Definitivo",		//e hifens; portanto, usam strings literais
		"publico":"todos",					
		autor:{								// o valor dessa propriedade é 
			nome:"David",					// ele proprio um objeto. Note que esses nomes de propridade nao tem aspas
			sobrenome:"Flanagan"
		}
	};

console.log(livro.autor.nome);
console.log(livro['titulo']);

console.log("Criando um novo objeto que herda de um prototipo");
/* inherit) retorna um objeto recem - craido que herda propriedades do 
objeto prototipo p. Ele usa a funçao  ECMAScript  Object.create() se 
estiver definida e, caso contrario , retorcede para uma tecnica mais antiga*/

function inherit(p) {
	if(p ==null) throw TypeError(); //p deve ser im objeto nao null
	if(Object.create)				// Se o Object.create esta definida
		return Object.create(p);	// entao basta usala
	var t = typeof p;				//Caso cotrario faz mais uma verificação de tipo
	if(t!=="object" && t!== "function") throw TypeError();
	function f(){};					//Define uma construtora ficticia
	f.prototype = p;				//Configura sua propriedade prototyoe como p 
	return new f();					//usa f() para criar um herdeiro de p 	
}
 console.log(inherit(point));

/* concatrena cusotmres no addr*/
 var addr= "";
 for (var i = 0; i < 4; i++){

 	addr += livro.autor['name' + i ]+ '\n'; 
 }

console.log("funções utilitarias que enumeam propriedades");
/*
copia as propriedades enumeraveis de p em o e retorna.
Se o e p tem uma propriedade de mesmo nome , a propriedade de 0 é sobrescrita
Esta função nao manipula nmetodos getter e setter nem copia atributos
*/

function extend(o,p)
{	
	for(prop in p)			//Para todas as props em p
	{
		o[prop] = p[prop];	//Adiciona a propriedade em o
	}
	return o;
}
 console.log("extnd", extend(point,livro));
/*
	copia as´propriedades enumeraveis de p em o e retorna o
	se  oe p tem uma propriedade de mesmo nome ,  a propriedade de o é deixada intacta
	Esta função nao manipula nmetodos getter e setter nem copia atributos
*/
function merge(o,p)
{
	for(prop in p){								//para todas as props em p
		if(o.hasOwnProperty[prop]) continue;	//Exceto as que ja estao em o
		o[prop] = p[prop];						//Adiciona a propriedade em o
	}
	return o ;
}
console.log("merge", merge(point2, vazio));
/*Remove as pro´priedades de o se na existe uma propriedade com o mesmo nome em  p
*/
function restrict(o,p){

	for(prop in o ){						//Para todas as proos em o
		if(!(prop in p)) delete o[prop];	//Exclui se nao estiver em p
	}
	return o;
}
/*Para cada propriedade de p , exclui de o a propriedade de mesmo nome
rerona o*/
function substract(o,p)
{
	for(prop in p){
		delete o[prop];
	}
	return o;
}
console.log("substract", substract(point2, vazio));
/*retorna um novo objeto contendo as propreidade de  o e p */
function union(o,p){ return extend(extend({},o),p);}
console.log("union", union(point2, point));
/*retorna um novo obejto contendo aopesa as propriedades de  
que tambem aparecem em p. Istto  é com a interseção de o e p , 
mas os valores da propriedades em p sao descartadas*/

function intersection(o,p){ return restrict(extend({},o),p);}
console.log("intersection", intersection(point2, point));
/*retorna um array com todas as propiredade emnumeradas de o*/
 function keys(o)
 {
 	if(typeof o !== "object") throw TypeError();
 	var result = [];
 	for(var prop in o){
 		if(o.hasOwnProperty(prop))
 			result.push(prop);
 	}
 	return result;
 }
 console.log("key", point);

console.log("getter e setter objetos javascript");
//Este objeto gera nuemeros serias estritamente crescentes
var serialNum = {
	$n:0,
	//retorna o valor atual e o incremmenta
	get next(){return this.$n++;},
	//Configura um novo valor de n, mas somente se fo maior que o atual
	set next(n){
		if(n >= this.$n) this.$n = n;
		else throw 'Serial number can only be set to a larger value';
	}
};
serialNum.next = 6;
console.log('Serial Number', serialNum.next );
serialNum.next = 9;
console.log('Serial Number', serialNum.next );
console.log(point.valueOf());











