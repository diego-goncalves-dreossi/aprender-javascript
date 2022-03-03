var lista_nums = []
//Elementos HTML não estão em variáveis globais pois
//a tag script da página HTML está bem no começo, o código não
//não executa corretamente por causa de renderização de elementos HTML

function adicionar(){
    //Ver se div que mostrará a ficha está vazio
   
    var ficha = document.getElementById('res')
    if(ficha.innerHTML != ''){
        ficha.innerHTML = ''
    }

    var numero = document.getElementById('txtn')
    var ln = document.getElementById('selnum')//Lista de numeros
    var num = Number(numero.value)
    

    if(!numero.value.length == 0){
        if(num > 0 && num <= 100){
            //lista_nums.includes(num): includes é uma função que verifica se certo valor está na lista
            if(!lista_nums.includes(num)){
                lista_nums.push(num)

                var item = document.createElement('option')
                item.text = `Valor ${num} foi adicionado.`
                item.value = `nm${lista_nums.length - 1}`
                ln.appendChild(item)

                numero.value = ''
                numero.focus()
                //Cria o efeito de clicarmos com o mouse na ciaxa de texto, colocando o cursor do mouse no começo

            }else{
                alert('Número já adicionado, digite outro!')
            }
        }else{
            alert('Número fora do intervalo permitido, digite outro!')
        }
    }else{
        alert('Digite um número')
    }
}

function finalizar(){
    var ficha = document.getElementById('res')
    var numero = document.getElementById('txtn')
    var maior = 0
    var soma = 0

    if(lista_nums.length != 0 || numero.value.length != 0 ){
        for(let nl in lista_nums){
            if(lista_nums[nl] > maior){
                maior = lista_nums[nl]
            }
            soma += lista_nums[nl]
        }

        var menor =  maior
        for(let nl in lista_nums){
            if(lista_nums[nl] < menor){
                menor = lista_nums[nl]
            }

        }

        var media = soma/lista_nums.length

        var res = [lista_nums.length,maior,menor,soma,media.toFixed(2)]
        var txtlin = ['Ao todo, os números cadastrados são ','O maior valor informado foi ','O menor valor informado foi ','Somando todos os valores, temos ','A média dos valores digitados é ']

        //alert(`Q${lista_nums.length} MA${maior} ME${menor} SO${soma} MED${media}`)

        for(var z = 0;z <5;z++){
            var linha = document.createElement('p')
            //var item = document.createElement('option')
            linha.innerHTML = txtlin[z] + `${res[z]}`//linha.text não funciona
            ficha.appendChild(linha)
        }
    }else{
        var linha = document.createElement('p')
            //var item = document.createElement('option')
            linha.innerHTML = 'Nada a analisar'//linha.text não funciona
            ficha.appendChild(linha)
        
    }
    
}

function limpar(){
    var ficha = document.getElementById('res')
    ficha.innerHTML = ''
    var numero = document.getElementById('txtn')
    numero.value = ''
    var ln = document.getElementById('selnum')
    ln.innerHTML = ''
    while(lista_nums.length != 0){
        //Enquanto houver elementos na lista
        lista_nums.pop()
        //Exclui elementos
    }
    
}

//Objeto em JS

let serie = {
    'nome':'Faking It',
    'canal':'MTV',
    'temporadas': 3,
    'episodios':38,
    'protagonista':'Rita Volk',
    'no_ar':false,
    mudarCanal(canal){
        this.canal = canal
    }
}
console.log(serie)