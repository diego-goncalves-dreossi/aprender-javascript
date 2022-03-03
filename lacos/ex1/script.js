function contar(){

  //Pegar e identificar inputs
  var ini =  document.getElementById('ini')
  var fim =  document.getElementById('fim')
  var pas =  document.getElementById('pas')
  var res = document.querySelector('div#res')
  var r = ''
  var c = 0
  
  if(ini.value.length == 0 || fim.value.length == 0){
    window.alert('[ERRO] Verifique os dados e digite novamente!')
    res.innerHTML = 'Impossível contar!'
  }else{
    ini = Number(ini.value)
    fim = Number(fim.value)
    pas = Number(pas.value)
    if(pas <= 0){
        pas = 1
        alert('Passo inválido, valor será mudado para 1')
    }

    //Realiza a contagem
    if(ini < fim){ 
        //Contagem crescente 
        for(c = ini;c <= fim; c = c + pas){
            r += `${c} \u{1F449} `//Formatação correta para emojis \u{unicode}
        }
    }else{
        //Contagem regressiva
        for(c = ini;c >= fim; c = c - pas){
            r += `${c} \u{1F449} `//Formatação correta para emojis \u{unicode} Emoji de mão apontando pra direita
        }

    }
    r += `\u{1F3C1}`//Emoji de bandeira corrida

    res.innerHTML = `${r}`

    }



}

function limpar(){
    //alert('Limpar')
    //Pegar e identificar inputs
    var ini = document.getElementById("ini")
    var fim = document.getElementById("fim")
    var pas = document.getElementById("pas")

    //Valor dos inputs limpos são vazios
    pas.value = ''
    fim.value = ''
    ini.value = ''
    //alert('Limpou')
}