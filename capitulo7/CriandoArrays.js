var msg = function(texto){
	console.log(texto );
};
msg("Ola mundo");
var vazio = []; 				//cria array vazio
var primos = [2,3,5,7,11]; 		//arrrays de numeros primos
var mist = [0,true,"a",22.5];	//elementos de varios tipos no arrry


msg("os valores nao precisam ser constantes podem ser arbritarios");
var base = 1024;
var tabela = [base,base+1,base+2,base+3];
msg("podem conter obejtos literais e arrays literais");
var b = [[1,{x:2,y:3}],[2,{x:3,y:4}]];
msg("valores omitidos nao exitem");
var count = [1,,,3];
console.log(count);
var def = [,,];
console.log(def.length);

msg("tranformando propriedade length somente para leitura de um array");
a = [1,2,3];
Object.defineProperty(a,'length',{writable:false});
a.length = 0;
console.log(a.length);

msg("metodo push para adicionar valores no array");
a = [];				//começca um aarray vazio
a.push("zero");		//Adiciona um valor no final. a =['zero']
a.push('one','two');//Adicina mais dois valores para o array

console.log(a);

msg("deletando um elemento do array");

delete a[1];//não afeta o comprimento do array;
console.log('deletando elemento one ', a);

msg("interaçoes em arryas");

var keys = Object.keys(b);			//obtem um array de nomes de proprreidades do objeto o
var values =[];						//Armazena os valores de propriedade corresponde nesse array
for(var i=0;i<keys.length; i++){	//Para cada indice do array
	var key = keys[i];				//Obtem a chave nesse indece
	console.log(values[i] = b[key]);//armazena o valor na array values
}
msg("pula elementos nulll, indefinidos e inixsitentes");
for(var i=0;i<a.length; i++){
	if(!a[i]) continue; //pula os elementos null, undefined
	//resto do laço
}
msg("Pula os elemetentos null");
for(var i=0;i<a.length; i++){
	if(a[i] === undefined)continue;	//pula os undefined e inexistentes
	//resto do laço
}
msg("Pula os indices que não existe");
for(var i=0;i<a.length; i++){
	if(!(i in a))continue;	//pula os undefined e inexistentes
	//resto do laço
}

msg("laço for/in");
for(var index in a){
	var value = a[index];
	//agora faz alocom com index e value
}

msg("teste adicionais para filtrar as propriedades herdadas indesejadas");
for(var i in a){
	if(!a.hasOwnProperty(i))continue;
	//agora faz alocom com index e value
}
for(var i in a){
	if(String(Math.floor(Math.abs(Number(i))))!== i )continue;
	//agora faz alocom com index e value
}

msg("metodos de arryas");
msg("metodo join(), transforma todos os elementos do array em string");
var a= [3,2,1]; //cria um array
console.log(a.join());
console.log(a.join(" "));
console.log(a.join(""));
var b = new Array(10); //um novo array de comprimento 10
console.log(b.join("-"));

msg("metodo sort(), Ordena o array");

console.log(a);
a.sort();
var s = a.join(",");
console.log(s);


msg("metodo reverse(), inverte a ordem do array");
console.log(a.reverse());

msg("metodo concat(), cria e retorna um novo array contendo os elementos do array original em que concat foi chamando");
var b = [1,2,3];
console.log(b.concat(4, 5));

msg("splice(), inserir ou remover elemento de um array, 1° passa o indice e o segundo parametro a qunatidade de elementos a ser tirado ");

var remove = [1,2,32,4,65,36];
console.log(remove);
remove.splice(0,3);
console.log(remove);

msg("metodo push() e pop(), funciona como uma pilha, first-in last-out");

var stack = [];
stack.push(1,2);
console.log(stack);
stack.pop();
console.log(stack);
stack.push(3);
console.log(stack);
msg(" os metodos unshift e shift sao semelhantes ao pop e push,que eles colocam no comeco do array");

msg("funcloes do arrays");
var sum =0;
a.forEach(function(value){ sum +=value });
console.log("a soma dos valore do array eh =", sum);
msg('cmopara dois arryas e mostra os indeces iguais');
function findAll(a,x)
{
	var result=[]; //o array de indeces que iremos retornar
		len = a.length; //o comprimento do array a serpesquisado
		pos = 0; //posicção inicial da pesquisa
	while(pos < len){	//enquanto houver elementos a serem pesquisados
		pos = a.indexOf(x, pos);	//pesquisa
		if(pos === -1) break;	//se nada for encontrado, termina 
		result.push(pos);	//caso contraio armazena o indece no array
		pos = pos + 1;	//e começa a proxima pesquisa
	}
	return result;
}
var teste =[];
var teste2 = [2,,];
console.log(findAll(teste, teste2));