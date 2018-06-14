var teste = ' "javascript" ';
console.log(teste.search(/script/i));
console.log(teste.replace(/javascript/gi,"JAVASCRIPT"));
/* uma situação composta de aspas , seguidas de qualquer numero de 
caracteres que nao sao aspaas (as quais lembramos), seguidosde outras aspas*/
var aspas = /"([^"]*)"/g;
//substitui aspas normais pela aspas inglessas
//deixando o texto da citacção intacto
console.log(teste.replace(aspas, '"$1"'));

/*analiznado uma url com o codigo aseguir*/
var url = /(\w+):\/\/([\w.]+)\/(\S*)/;

var text = "Visite nosso site em http://www.sitecolisao.com/~jogos";
var result = text.match(url);
if(result != null)
{
	var fullurl = result[0]; 	//contem http://www.sitecolisao.com/~jogos
	var protocol = result[1];	//contem http;
	var host = result[2]; 		//comtem www.sitecolisao.com/~jogos
	var path = result[3];		//contem ~jogos
}
console.log(result[0]);