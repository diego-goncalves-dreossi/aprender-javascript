function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    var res = document.getElementById('res')
    //Verifica se valor foi digitado
    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    }else{
        var n = Number(num.value)
        var c = 0
        //Limpa área de tabuada
        tab.innerHTML = ''
        //Cria e calcula tabuada
        while(c < 11){
            //Criar elemento, um item (option) no select da tabuada
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        res.innerText = 'Calculado'

    }
}

function limpar(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    var res = document.getElementById('res')
    var item = document.createElement('option')
    num.value = ''
    tab.innerHTML = ''
    item.text = `Digite um número acima`
    tab.appendChild(item)
    res.innerText = 'A calcular...'
    

}