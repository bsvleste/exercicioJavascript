function range(min,max)
{	
	var i = Math.ceil(min);
	for(i; i <= max; i++) yield i;
}
//chama a funçao geradora para obter um  gerador e , entao op intera
for(var n in range(3,8)) console.log(n);