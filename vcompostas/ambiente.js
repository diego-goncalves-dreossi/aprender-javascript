var nums = [10,10,27,15,26,6,31]

//Acrescentar valor no vetor
nums[7] = 24
//O JS cria o espaço no vetor caso a posição não exista
nums.push(21)
//push é um método interno que cria um elemento no vetor com o índice correto

//Saber comprimento do vetor. Não é um método, é um atributo, então sem ()
nums.length
//console.log(nums.length)
//Arrumar os elementos do vetor, usando os valores alfabéticos, ou seja, em números não funciona bem, é preciso usar uma função como argumento do sort.
nums.sort()
//console.log(nums)
/* Ao mostrar no console um vetor o formato é assim
[
  10, 10, 15, 21, 24,
  26, 27,  6,  8
]
*/

//Mostrar os itens de um vetor de forma diferente, sem ser no formato acima

/*for(let c = 0;c < nums.length; c++){
    console.log(`nums[${c}] = ${nums[c]} `)
}*/

//For ótimizado para variáveis compostas
/*for(let n in nums){
    console.log(nums[n])
}*/

//Busca pelo valor de um vetor pelo seu índice, retorna o valor do índice
console.log(nums.indexOf(10))


