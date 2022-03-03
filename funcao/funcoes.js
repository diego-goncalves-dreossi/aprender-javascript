function parimpar(n){
    //Apenas números inteiros
    if(n%2==0){
      return 'Par'
    }else{
      return 'Impar'
    }
}
  
  
//console.log(parimpar(1222225))

function soma(n1 = 0,n2 = 0){
    //Ao pré definir uma variável tratamos a possibilidade de parâmetro ser indefinido, e esses valores serão os valores padrão
    return n1 + n2
}

//Caso um parâmetro não for escrito na chamada e não tiver tratamento dentro da função, o parâmetro fica indefinido.

console.log(soma(24,3000))

//Podemos criar uma função diretamente na atribuição de uma variável
//Tem casos em que as funções não precisam ser nomeadas

let divisao = function(d1 =0,d2=1){
    //Aqui a variável se tornará uma função
    if(d2 == 0){
        return 'Divisão por 0 impossível'
    }else{
        if(Number.isInteger(d1/d2)){
            //Verifica se é inteiro
            return d1/d2
        }else{
            return (d1/d2).toFixed(2)
            //Formata para retornar apenas duas casas decimais
        }
    }
}

console.log(divisao(100,5.2))

function fatorial(n){
    if(!Number.isInteger(n) || Number.isNaN(n)){
        return 'Digite número inteiro válido!'
    } else{
        if(n == 1){
            return 1
        }else{
            return n * fatorial(n-1)//Recursividade
        }
    }
}

function outrofatorial(n){
    if(!Number.isInteger(n) || Number.isNaN(n)){
        return 'Digite número inteiro válido!'
    } else{
        var fat = 1
        for(let c = n;c > 1; c--){
            fat *= c
        }
        return fat
    }
}

console.log(fatorial(5))
console.log(outrofatorial(5))